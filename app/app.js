(() => {
  'use strict';

  const UNITS = window.UNITS || [];
  const CARDS_RAW = window.CARDS || [];

  const DAY = 86400000;
  const MAX_INTERVAL_DAYS = 10;
  const CARDS_RESET = Date.parse('2026-11-04T18:40:00.000Z'); // flashcard progress from before this moment is ignored (fresh start)
  const LS_PROGRESS = 'nmun.progress.v1';
  const LS_PW = 'nmun.pw';

  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const todayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const parseDay = (k) => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } };
  const lsDel = (k) => { try { localStorage.removeItem(k); } catch { /* storage unavailable */ } };

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, 2200);
  }
  // Bar with an Undo button that stays for 5 seconds.
  function undoBar(msg, onUndo) {
    let b = $('#undo-bar');
    if (!b) { b = document.createElement('div'); b.id = 'undo-bar'; b.className = 'toast undo'; b.setAttribute('role', 'status'); document.body.appendChild(b); }
    b.innerHTML = `<span>${esc(msg)}</span> <button type="button" class="undo-btn">Undo</button>`;
    b.hidden = false;
    clearTimeout(undoBar._t);
    undoBar._t = setTimeout(() => { b.hidden = true; }, 5000);
    b.querySelector('button').addEventListener('click', () => { clearTimeout(undoBar._t); b.hidden = true; onUndo(); });
  }
  async function copyText(text, el) {
    try { await navigator.clipboard.writeText(text); toast('Copied'); }
    catch {
      if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      toast('Select and copy the text');
    }
  }

  // ---------- content indexes ----------
  const unitById = Object.fromEntries(UNITS.map((u) => [u.id, u]));
  const GROUPS = [...new Set(UNITS.map((u) => u.group))];
  // New cards are introduced in reading order (foundations, organs, delegation, then the rest).
  const unitOrder = Object.fromEntries(UNITS.map((u, i) => [u.id, i]));
  const ALL_CARDS = CARDS_RAW.map(([unit, front, back]) => ({ id: `${unit}:${hash(front)}`, unit, front, back }))
    .map((c, i) => [c, i]).sort((a, b) => ((unitOrder[a[0].unit] ?? 1e9) - (unitOrder[b[0].unit] ?? 1e9)) || a[1] - b[1]).map(([c]) => c);
  // Cards the user deleted (synced in progress.deleted) are hidden everywhere.
  let CARDS = ALL_CARDS;
  const isDeleted = (id) => { const e = P.deleted[id]; return !!(e && e.x); };
  function rebuildCards() { CARDS = ALL_CARDS.filter((c) => !isDeleted(c.id)); }
  const groupOf = (unitId) => (unitById[unitId] ? unitById[unitId].group : 'Other');

  // ---------- progress store (local-first, merged per entry by timestamp) ----------
  const SECTIONS = ['cards', 'quiz', 'read', 'plan', 'speak', 'newLog', 'settings', 'deleted'];
  function emptyProgress() { const p = { v: 1 }; SECTIONS.forEach((s) => { p[s] = {}; }); return p; }
  function loadLocal() {
    try { const p = JSON.parse(lsGet(LS_PROGRESS)); if (p && p.v === 1) { SECTIONS.forEach((s) => { p[s] = p[s] || {}; }); return p; } } catch { /* fall through */ }
    return emptyProgress();
  }
  function merge(a, b) {
    const out = emptyProgress();
    SECTIONS.forEach((s) => {
      const A = (a && a[s]) || {}; const B = (b && b[s]) || {};
      const keys = new Set([...Object.keys(A), ...Object.keys(B)]);
      keys.forEach((k) => {
        const x = A[k]; const y = B[k];
        out[s][k] = !x ? y : !y ? x : ((y.t || 0) > (x.t || 0) ? y : x);
      });
    });
    return out;
  }
  let P = loadLocal();
  rebuildCards();
  const setting = (k, def) => (P.settings[k] ? P.settings[k].v : def);
  function put(section, key, value) {
    P[section][key] = { ...value, t: Date.now() };
    lsSet(LS_PROGRESS, JSON.stringify(P));
    scheduleSync();
  }

  // ---------- sync ----------
  let syncMode = 'local'; // 'remote' | 'local' | 'nostore'
  let syncTimer = null;
  let syncing = false;
  function pill(state, text) {
    const el = $('#sync-pill'); if (!el) return;
    el.className = `sync-pill ${state}`; $('.sync-text', el).textContent = text;
  }
  async function api(method, body) {
    const r = await fetch('/api/progress', {
      method,
      headers: { 'Content-Type': 'application/json', 'x-app-password': lsGet(LS_PW) || '' },
      body: body ? JSON.stringify(body) : undefined,
    });
    let data = null; try { data = await r.json(); } catch { /* non-JSON */ }
    return { status: r.status, data };
  }
  function scheduleSync() {
    if (syncMode !== 'remote') return;
    clearTimeout(syncTimer); syncTimer = setTimeout(syncNow, 1500);
  }
  async function syncNow() {
    if (syncMode !== 'remote' || syncing) return;
    syncing = true; pill('busy', 'Syncing');
    try {
      const got = await api('GET');
      if (got.status === 401) { syncMode = 'local'; lsDel(LS_PW); pill('err', 'Signed out'); return; }
      if (got.status !== 200) throw new Error(String(got.status));
      P = merge(P, got.data.progress); rebuildCards();
      lsSet(LS_PROGRESS, JSON.stringify(P));
      const putRes = await api('PUT', { progress: P });
      if (putRes.status !== 200) throw new Error(String(putRes.status));
      pill('ok', 'Synced');
    } catch {
      pill('err', 'Offline');
    } finally { syncing = false; }
  }
  async function pullOnly() {
    if (syncMode !== 'remote') return;
    try {
      const got = await api('GET');
      if (got.status === 200) { P = merge(P, got.data.progress); rebuildCards(); lsSet(LS_PROGRESS, JSON.stringify(P)); pill('ok', 'Synced'); route(); }
    } catch { pill('err', 'Offline'); }
  }

  async function boot() {
    let probe;
    try { probe = await api('GET'); } catch { probe = null; }
    if (!probe || probe.status === 404 || probe.status === 405) {
      syncMode = 'local'; startApp(); pill('', 'This device'); return;
    }
    if (probe.status === 401) { showGate(lsGet(LS_PW) ? 'That password did not work. Try again.' : ''); return; }
    if (probe.status === 503) { syncMode = 'nostore'; startApp(); pill('err', 'Not synced'); toast('Sync storage is not connected yet. Progress stays on this device.'); return; }
    if (probe.status === 200) {
      syncMode = 'remote';
      P = merge(P, probe.data.progress); rebuildCards(); lsSet(LS_PROGRESS, JSON.stringify(P));
      startApp(); pill('ok', 'Synced'); scheduleSync(); return;
    }
    syncMode = 'local'; startApp(); pill('err', 'Offline');
  }
  function showGate(err) {
    $('#gate').hidden = false; $('#shell').hidden = true;
    const e = $('#gate-error'); e.hidden = !err; e.textContent = err || '';
    $('#gate-pw').focus();
  }
  $('#gate-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    lsSet(LS_PW, $('#gate-pw').value);
    $('#gate').hidden = true; boot();
  });
  let started = false;
  function startApp() {
    $('#gate').hidden = true; $('#shell').hidden = false;
    if (!started) {
      started = true;
      window.addEventListener('hashchange', route);
      $('#sync-pill').addEventListener('click', () => { if (syncMode === 'remote') syncNow(); else toast(syncMode === 'nostore' ? 'Sync storage is not connected yet' : 'Sync is off on this device'); });
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') pullOnly(); });
    }
    route();
  }

  // ---------- spaced repetition ----------
  const afterReset = (e) => (e && (e.t || 0) >= CARDS_RESET ? e : null);
  function newToday() { const e = afterReset(P.newLog[todayKey()]); return e ? e.n : 0; }
  function cardState(id) { return afterReset(P.cards[id]); }
  // New cards allowed so far: the plan's per-day numbers up to today, minus cards already started. Unused ones roll over.
  function newLeftToday() {
    const plan = (window.PLAN && window.PLAN.newCards) || {};
    const dates = Object.keys(plan).sort();
    const k = todayKey();
    if (dates.length && k > dates[dates.length - 1]) return Infinity;
    const target = dates.filter((d) => d <= k).reduce((n, d) => n + plan[d], 0);
    return Math.max(0, target - CARDS.filter((c) => cardState(c.id)).length);
  }
  function isDue(c, now = Date.now()) { const s = cardState(c.id); return s && s.d <= now; }
  function schedule(s, grade, now = Date.now()) {
    const st = s ? { ...s } : { r: 0, i: 0, e: 2.5, d: now, l: 0 };
    if (grade === 1) { st.r = 0; st.i = 0; st.e = Math.max(1.3, st.e - 0.2); st.l = (st.l || 0) + 1; st.d = now + 60 * 1000; return st; }
    if (st.r === 0) {
      if (grade === 2) { st.d = now + 6 * 60 * 1000; return st; }
      st.i = grade === 4 ? 3 : 1; st.r = 1;
    } else {
      if (grade === 2) { st.i = Math.max(1, st.i * 1.2); st.e = Math.max(1.3, st.e - 0.15); }
      else if (grade === 3) { st.i = Math.max(st.i + 1, st.i * st.e); }
      else { st.i = Math.max(st.i + 2, st.i * st.e * 1.3); st.e += 0.15; }
      st.r += 1;
    }
    st.i = Math.min(MAX_INTERVAL_DAYS, Math.round(st.i * 10) / 10);
    st.d = now + st.i * DAY;
    return st;
  }
  function fmtInterval(ms) {
    if (ms < 60 * 60 * 1000) return `${Math.max(1, Math.round(ms / 60000))}m`;
    if (ms < DAY) return `${Math.round(ms / 3600000)}h`;
    return `${Math.round(ms / DAY)}d`;
  }
  function cardsInScope(scope) {
    if (scope === 'all') return CARDS;
    if (scope.startsWith('unit:')) return CARDS.filter((c) => c.unit === scope.slice(5));
    if (scope.startsWith('group:')) { const g = decodeURIComponent(scope.slice(6)); return CARDS.filter((c) => groupOf(c.unit) === g); }
    return CARDS;
  }
  function scopeCounts(list) {
    const now = Date.now(); let due = 0; let fresh = 0;
    list.forEach((c) => { const s = cardState(c.id); if (!s) fresh++; else if (s.d <= now) due++; });
    return { due, fresh, total: list.length };
  }

  // ---------- router ----------
  function setActiveTab(tab) {
    document.querySelectorAll('[data-tab]').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));
  }
  function route() {
    const h = (location.hash || '#plan').slice(1);
    const [tab, ...rest] = h.split('/');
    const views = { plan: viewPlan, cards: viewCards };
    const name = views[tab] ? tab : 'plan';
    setActiveTab(name);
    const view = $('#view');
    views[name](view, rest);
    view.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  // ---------- plan ----------
  const PLAN = window.PLAN || { days: [], levels: {} };
  const KIND_LABEL = { cards: 'Flashcards', read: 'Read', voice: 'Voice', write: 'Write', chat: 'Claude Code', news: 'News', other: 'Task' };
  const KIND_CLASS = { cards: '', read: 'accent', voice: 'warn', write: 'good', chat: 'good', news: '', other: '' };
  const taskKey = (day, i) => day.tasks[i].key || `v4:${day.date}#${i}`; // explicit keys keep ticks stable when tasks are removed
  const isDone = (day, i) => !!(P.plan[taskKey(day, i)] && P.plan[taskKey(day, i)].v);
  function todayIndex() {
    const k = todayKey(); const days = PLAN.days;
    if (!days.length) return -1;
    const i = days.findIndex((d) => d.date >= k);
    return i < 0 ? days.length - 1 : i;
  }
  function fmtMins(m) { return m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}` : `${m} min`; }
  function dayLabel(d) { return parseDay(d.date).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'short' }); }
  function taskRow(day, t, i) {
    const done = isDone(day, i); const id = `task-${day.date}-${i}`;
    const link = t.href ? `<a href="${t.href}">Open</a>` : '';
    return `<li class="task ${done ? 'done' : ''}">
      <input type="checkbox" id="${id}" data-day="${day.date}" data-i="${i}" ${done ? 'checked' : ''}>
      <div><label for="${id}" class="task-text">${esc(t.text)}</label>
        <div class="task-meta">${t.when ? `<span class="chip mono">${esc(t.when)}</span>` : ''}<span class="chip ${KIND_CLASS[t.kind] || ''}">${KIND_LABEL[t.kind] || 'Task'}</span>${t.mins ? `<span class="chip">${fmtMins(t.mins)}</span>` : ''}${link}</div>
        ${t.say ? `<div class="say-line"><span class="muted">Say:</span> <q>${esc(t.say)}</q> <button class="btn small ghost" data-say="${esc(t.say)}" type="button">Copy</button></div>` : ''}
      </div></li>`;
  }
  function dayBlock(d, k, current) {
    const lv = PLAN.levels[d.level] || {};
    const done = d.tasks.filter((t, i) => isDone(d, i)).length;
    const mins = d.tasks.reduce((n, t) => n + (t.mins || 0), 0);
    return `<details class="plan-day ${current ? 'current' : ''} ${done === d.tasks.length ? 'complete' : ''}" ${current ? 'open' : ''}>
      <summary>
        <span class="pd-date"><span class="mono">${esc(dayLabel(d))}</span>${current ? '<span class="chip accent">Today</span>' : ''}</span>
        <span class="pd-title">${esc(d.title)}</span>
        <span class="row">${lv.label ? `<span class="chip level-${d.level}">${esc(lv.label)} · ${esc(lv.hours || '')}</span>` : ''}<span class="chip done-count">${done}/${d.tasks.length} done</span><span class="chip">${fmtMins(mins)} planned</span></span>
      </summary>
      <ul class="tasks">${d.tasks.map((t, i) => taskRow(d, t, i)).join('')}</ul>
    </details>`;
  }
  function viewPlan(view) {
    const ti = todayIndex();
    const interview = parseDay(PLAN.interviewDate || '2026-11-14');
    const daysLeft = Math.max(0, Math.ceil((interview - parseDay(todayKey())) / DAY));
    const total = PLAN.days.reduce((n, d) => n + d.tasks.length, 0);
    const done = PLAN.days.reduce((n, d) => n + d.tasks.filter((t, i) => isDone(d, i)).length, 0);
    view.innerHTML = `<div class="narrow stack-lg">
      <section class="hero">
        <div class="page-head"><p class="eyebrow">Road to the interview</p><h1>Plan</h1>
          <p class="muted">${done}/${total} tasks done</p></div>
        <div class="countdown"><div class="num">${daysLeft}</div><div class="muted">days to go<br><span class="mono">${esc(interview.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }))}</span></div></div>
      </section>
      <div class="progress"><span style="width:${total ? Math.round((done / total) * 100) : 0}%"></span></div>
      <section class="stack">${PLAN.days.map((d, k) => (k >= ti ? dayBlock(d, k, k === ti) : '')).join('')}</section>
    </div>`;
    view.querySelectorAll('input[data-day]').forEach((cb) => cb.addEventListener('change', () => {
      const d = PLAN.days.find((x) => x.date === cb.dataset.day);
      put('plan', taskKey(d, Number(cb.dataset.i)), { v: cb.checked });
      cb.closest('.task').classList.toggle('done', cb.checked);
      const block = cb.closest('.plan-day'); const boxes = [...block.querySelectorAll('input[data-day]')];
      block.classList.toggle('complete', boxes.every((b) => b.checked));
      const chip = block.querySelector('.done-count'); if (chip) chip.textContent = `${boxes.filter((b) => b.checked).length}/${boxes.length} done`;
    }));
    view.querySelectorAll('[data-say]').forEach((b) => b.addEventListener('click', () => copyText(b.dataset.say)));
  }

  // ---------- daily reminder (web push) ----------
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const pushSupported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  let swReg = null;
  async function getReg() {
    if (!swReg) swReg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    await navigator.serviceWorker.ready;
    return swReg;
  }
  function keyToBytes(b64) {
    const pad = '='.repeat((4 - (b64.length % 4)) % 4);
    const raw = atob((b64 + pad).replace(/-/g, '+').replace(/_/g, '/'));
    return Uint8Array.from(raw, (c) => c.charCodeAt(0));
  }
  function deviceLabel() {
    if (/iPhone/.test(navigator.userAgent)) return 'iPhone';
    if (isIOS) return 'iPad';
    if (/Android/.test(navigator.userAgent)) return 'Android';
    if (/Mac/.test(navigator.userAgent)) return 'Mac';
    return 'Computer';
  }
  async function pushApi(method, body, query = '') {
    const r = await fetch('/api/push' + query, {
      method, headers: { 'Content-Type': 'application/json', 'x-app-password': lsGet(LS_PW) || '' },
      body: body ? JSON.stringify(body) : undefined,
    });
    let data = null; try { data = await r.json(); } catch { /* non-JSON */ }
    if (!r.ok) throw new Error((data && data.error) || `Request failed (${r.status})`);
    return data;
  }
  async function renderReminder(panel) {
    const head = '<p class="eyebrow">Daily reminder</p><h3>8:20 PM study nudge</h3>';
    if (isIOS && !isStandalone) {
      panel.innerHTML = `${head}<p class="muted">On iPhone, reminders only work from the Home Screen app. In Safari tap <strong>Share</strong> → <strong>Add to Home Screen</strong>, open Prep Desk from your Home Screen, sign in, then turn reminders on here.</p>`;
      return;
    }
    if (!pushSupported) { panel.innerHTML = `${head}<p class="muted">This browser can't receive notifications. Try Chrome, Edge or Safari.</p>`; return; }
    let sub = null;
    try { sub = await (await getReg()).pushManager.getSubscription(); } catch { /* not registered yet */ }
    const denied = Notification.permission === 'denied';
    panel.innerHTML = `${head}
      <p class="muted">${sub ? 'On for this device. You\'ll get a reminder every evening at 8:20 PM (Cairo time).' : denied ? 'Notifications are blocked for this site. Allow them in your browser or system settings, then reload.' : 'Get a notification every evening at 8:20 PM to study.'}</p>
      <div class="row">
        ${sub ? '<button class="btn" id="push-test">Send a test</button><button class="btn ghost" id="push-off">Turn off</button>' : `<button class="btn primary" id="push-on" ${denied ? 'disabled' : ''}>Turn on reminders</button>`}
      </div>`;
    const on = $('#push-on', panel); const off = $('#push-off', panel); const test = $('#push-test', panel);
    if (on) on.addEventListener('click', async () => {
      on.disabled = true;
      try {
        const perm = await Notification.requestPermission();
        if (perm !== 'granted') throw new Error('Notifications were not allowed');
        const { publicKey } = await pushApi('GET');
        const reg = await getReg();
        const s = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyToBytes(publicKey) });
        await pushApi('POST', { subscription: s.toJSON(), label: deviceLabel() });
        toast('Reminders on for this device');
      } catch (err) { toast(err.message || 'Could not turn on reminders'); }
      renderReminder(panel);
    });
    if (test) test.addEventListener('click', async () => {
      test.disabled = true;
      try { const r = await pushApi('POST', null, '?action=test'); toast(r.sent ? `Test sent to ${r.sent} device${r.sent === 1 ? '' : 's'}` : 'No devices received it'); }
      catch (err) { toast(err.message); }
      test.disabled = false;
    });
    if (off) off.addEventListener('click', async () => {
      try { await pushApi('DELETE', { subscription: sub.toJSON() }); await sub.unsubscribe(); toast('Reminders off for this device'); }
      catch (err) { toast(err.message); }
      renderReminder(panel);
    });
  }

  // Cards
  function viewCards(view, rest) {
    if (rest[0] === 'session') return viewSession(view, rest.slice(1).join('/') || 'all');
    const deckBtn = (scope, title, sub) => {
      const c = scopeCounts(cardsInScope(scope));
      return `<a class="deck" href="#cards/session/${scope}"><span class="t">${esc(title)}</span>${sub ? `<span class="muted">${esc(sub)}</span>` : ''}
        <span class="row"><span class="chip ${c.due ? 'warn' : ''}">${c.due} due</span><span class="chip">${c.fresh} new</span><span class="chip">${c.total} total</span></span></a>`;
    };
    view.innerHTML = `<div class="stack-lg">
      <div class="page-head"><p class="eyebrow">Spaced repetition</p><h1>Flashcards</h1>
        <p class="muted">Grade yourself honestly. "Again" brings a card back in a minute; "Good" pushes it out by days. Intervals are capped at ${MAX_INTERVAL_DAYS} days so everything comes back before the interview.</p></div>
      <section class="deck-grid">${(() => { const n = scopeCounts(CARDS).due; return `<a class="deck" href="#cards/session/due:all"><span class="t">Due only</span><span class="muted">Reviews that are due, no new cards</span><span class="row"><span class="chip ${n ? 'warn' : ''}">${n} due</span></span></a>`; })()}${deckBtn('all', 'Everything', 'All units together')}</section>
      ${GROUPS.map((g) => {
        const units = UNITS.filter((u) => u.group === g && CARDS.some((c) => c.unit === u.id));
        if (!units.length) return '';
        return `<section class="group"><h2>${esc(g)}</h2><div class="deck-grid">${deckBtn('group:' + encodeURIComponent(g), 'Whole section', '')}${units.map((u) => deckBtn('unit:' + u.id, u.title, '')).join('')}</div></section>`;
      }).join('')}
      <section class="panel stack">
        <h2>Daily target</h2>
        <p style="margin:0"><strong>${newLeftToday() === Infinity ? 'All' : newLeftToday()} new cards left today</strong>, plus every card that's due. <span class="muted">${newToday()} new done today.</span></p>
      </section>
      ${syncMode === 'remote' ? '<section class="panel stack" id="remind-panel"></section>' : ''}
    </div>`;
    const rp = $('#remind-panel'); if (rp) renderReminder(rp);
  }

  function viewSession(view, scope) {
    const dueOnly = scope.startsWith('due:'); // "due:<scope>" reviews due cards only, no new ones
    if (dueOnly) scope = scope.slice(4);
    let list = cardsInScope(scope);
    const now = Date.now();
    const due = list.filter((c) => isDue(c, now)).sort((a, b) => cardState(a.id).d - cardState(b.id).d);
    const newLeft = dueOnly ? 0 : newLeftToday();
    const fresh = list.filter((c) => !cardState(c.id)).slice(0, newLeft);
    let queue = [...due, ...fresh];
    let reviewed = 0; let flipped = false; let current = null; let cram = false;
    let back = []; // cards already passed this session, for Previous
    const done = new Set(); // graded this session and not coming back, so a revisit can't grade them twice
    const title = dueOnly ? 'Due cards' : scope === 'all' ? 'All units' : scope.startsWith('unit:') ? (unitById[scope.slice(5)] || {}).title : decodeURIComponent(scope.slice(6));

    // Past the daily limit: pull more unseen cards into this session.
    function addNew(n) {
      const queued = new Set(queue.map((c) => c.id));
      queue.push(...list.filter((c) => !cardState(c.id) && !queued.has(c.id)).slice(0, n));
      render();
    }
    // Cram: run through every card in the deck. Seen cards keep their schedule; new ones get scheduled normally.
    function startCram() {
      cram = true;
      back = []; done.clear();
      queue = shuffle(list);
      render();
    }

    // Skipped: passed with Next and never graded. They keep their schedule.
    function skippedCards() {
      const seen = new Set();
      return back.filter((c) => !done.has(c.id) && !seen.has(c.id) && seen.add(c.id));
    }
    function render() {
      current = queue.shift();
      if (!current) {
        const c = scopeCounts(list);
        const skipped = skippedCards();
        view.innerHTML = `<div class="narrow stack"><a href="#cards" class="muted">← Decks</a>
          <div class="panel stack"><p class="eyebrow">${esc(title)}</p><h1>${skipped.length ? 'End of the cards' : reviewed ? 'Session done' : 'Nothing due right now'}</h1>
          ${reviewed ? `<p>You reviewed <strong>${reviewed}</strong> card${reviewed === 1 ? '' : 's'}.</p>` : ''}
          ${skipped.length ? `<p>You skipped <strong>${skipped.length}</strong> card${skipped.length === 1 ? '' : 's'}. Skipped cards keep their schedule.</p>
          <div class="row"><button class="btn primary" id="review-skipped">Go through ${skipped.length} skipped</button><button class="btn" id="prev-end">← Previous</button></div>` : ''}
          <p class="muted">${c.fresh ? `${c.fresh} new card${c.fresh === 1 ? '' : 's'} left in this deck. You can keep going past today's limit.` : 'Every card in this deck has been seen at least once.'}</p>
          <div class="row">
            ${c.fresh ? `<button class="btn primary" id="more-20">Keep going: ${Math.min(20, c.fresh)} more new</button>` : ''}
            ${c.fresh > 20 ? `<button class="btn" id="more-all">All ${c.fresh} remaining new</button>` : ''}
            <button class="btn ${c.fresh ? '' : 'primary'}" id="cram">Cram all ${list.length} cards</button>
          </div>
          <p class="muted" style="margin:0">Cram runs through every card in random order without pushing back their review dates.</p>
          <div class="row"><a class="btn ghost" href="#cards">Back to decks</a></div></div></div>`;
        const m20 = $('#more-20'); if (m20) m20.addEventListener('click', () => addNew(20));
        const mAll = $('#more-all'); if (mAll) mAll.addEventListener('click', () => addNew(Infinity));
        $('#cram').addEventListener('click', startCram);
        const rs = $('#review-skipped'); if (rs) rs.addEventListener('click', () => { queue = skipped; back = []; render(); });
        const pe = $('#prev-end'); if (pe) pe.addEventListener('click', goPrev);
        return;
      }
      flipped = false;
      const s = cardState(current.id);
      const unit = unitById[current.unit];
      view.innerHTML = `<div class="narrow stack">
        <div class="row between"><a href="#cards" class="muted">← Decks</a><span class="row">${cram ? '<span class="chip warn">Cram</span>' : ''}<span class="chip">${queue.filter((c) => !done.has(c.id)).length + (done.has(current.id) ? 0 : 1)} left</span>${s ? '' : '<span class="chip accent">New</span>'}</span></div>
        <div class="flash" id="flash">
          <p class="eyebrow">${esc(unit ? unit.title : '')}</p>
          <div class="front">${esc(current.front)}</div>
          <div class="back" id="back" hidden>${esc(current.back)}</div>
        </div>
        <div id="controls"><button class="btn primary" id="show" style="width:100%">Show answer <span class="kbd">Space</span></button></div>
        <div class="row between"><span class="row"><button type="button" class="btn ghost" id="prev-card" ${back.length ? '' : 'disabled'}>← Previous</button><button type="button" class="btn ghost" id="next-card" title="Move on without grading. The card keeps its schedule.">Next →</button></span><button type="button" class="btn ghost" id="del-card" title="Remove this card for good (5 seconds to undo)">Delete card</button></div>
      </div>`;
      $('#show').addEventListener('click', flip);
      $('#del-card').addEventListener('click', deleteCurrent);
      $('#prev-card').addEventListener('click', goPrev);
      $('#next-card').addEventListener('click', goNext);
    }
    function goNext() {
      if (!current) return;
      back.push(current);
      render();
    }
    function goPrev() {
      if (!back.length) return;
      if (current) queue.unshift(current);
      const card = back.pop();
      queue = queue.filter((c) => c.id !== card.id);
      queue.unshift(card);
      render();
    }
    function deleteCurrent() {
      if (!current) return;
      const card = current;
      put('deleted', card.id, { x: 1 });
      rebuildCards();
      list = list.filter((c) => c.id !== card.id);
      queue = queue.filter((c) => c.id !== card.id);
      back = back.filter((c) => c.id !== card.id);
      undoBar('Card deleted', () => {
        put('deleted', card.id, { x: 0 });
        rebuildCards();
        list = cardsInScope(scope);
        if (current) queue.unshift(current);
        queue.unshift(card);
        render();
      });
      render();
    }
    function flip() {
      if (flipped || !current) return;
      flipped = true; $('#back').hidden = false;
      if (done.has(current.id)) { $('#controls').innerHTML = '<p class="muted" style="margin:0">Already graded this session.</p>'; return; }
      const s = cardState(current.id); const now = Date.now();
      const labels = [['again', 'Again', 1], ['hard', 'Hard', 2], ['good', 'Good', 3], ['easy', 'Easy', 4]];
      $('#controls').innerHTML = `<div class="grades">${labels.map(([cls, label, g]) => `<button class="grade ${cls}" data-g="${g}">${label}<small>${fmtInterval(schedule(s, g, now).d - now)} · ${g}</small></button>`).join('')}</div>`;
      $('#controls').querySelectorAll('[data-g]').forEach((b) => b.addEventListener('click', () => grade(Number(b.dataset.g))));
    }
    function grade(g) {
      if (!flipped || !current || done.has(current.id)) return;
      back.push(current);
      const wasNew = !cardState(current.id);
      reviewed++;
      if (cram && !wasNew) {
        if (g === 1) queue.splice(Math.min(queue.length, 3), 0, current);
        else done.add(current.id);
        render();
        return;
      }
      const st = schedule(cardState(current.id), g);
      put('cards', current.id, st);
      if (wasNew) put('newLog', todayKey(), { n: newToday() + 1 });
      if (st.d - Date.now() < 20 * 60 * 1000) queue.splice(Math.min(queue.length, g === 1 ? 3 : 6), 0, current);
      else done.add(current.id);
      render();
    }
    keyHandler = (e) => {
      if (e.target.matches('input, select, textarea')) return;
      if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (['1', '2', '3', '4'].includes(e.key)) grade(Number(e.key));
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    render();
  }
  let keyHandler = null;
  document.addEventListener('keydown', (e) => { if (keyHandler && location.hash.startsWith('#cards/session')) keyHandler(e); });

  boot();
})();
