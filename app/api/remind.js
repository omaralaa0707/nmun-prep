import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';
import { secretMatches } from '../lib/store.js';
import { SUBS_PATH, loadSubs, sendToAll, writeJson } from '../lib/push.js';

// Called once a day by an external scheduler at 20:20 Africa/Cairo.
// Auth: ?key=REMIND_SECRET or header x-remind-key. Sends at most once per Cairo day unless ?force=1.

function cairoDate(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Cairo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
}

function loadPlan() {
  try {
    const ctx = { window: {} };
    vm.runInNewContext(readFileSync(join(process.cwd(), 'data', 'plan.js'), 'utf8'), ctx);
    return ctx.window.PLAN;
  } catch (err) {
    console.error('plan load failed', err);
    return null;
  }
}

function buildMessage(today) {
  const plan = loadPlan();
  const left = Math.round((new Date((plan && plan.interviewDate) || '2026-11-12') - new Date(today)) / 86400000);
  const day = plan && plan.days.find((d) => d.date === today);
  if (day && left > 0) {
    const level = (plan.levels[day.level] || {}).label || '';
    return { title: `Study time · ${level}`, body: `${day.title}. ${day.tasks.length} tasks · ${left} day${left === 1 ? '' : 's'} to the interview.`, url: '/#plan' };
  }
  if (left > 0) return { title: 'Study time', body: `${left} day${left === 1 ? '' : 's'} to the interview. Flashcards first, then your next reading unit.`, url: '/#cards' };
  if (left === 0) return { title: 'Good luck', body: 'Breathe, answer the question asked, Point-Evidence-Link. You are ready.', url: '/#plan' };
  return { title: 'Study time', body: 'Keep your knowledge fresh: 20 minutes of flashcards tonight.', url: '/#cards' };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const given = req.query.key || req.headers['x-remind-key'];
  if (!secretMatches(Array.isArray(given) ? given[0] : given, process.env.REMIND_SECRET || '')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const today = cairoDate();
    const before = await loadSubs();
    if (req.query.dry === '1') {
      return res.status(200).json({ date: today, devices: before.subs.length, lastSent: before.lastSent, message: buildMessage(today) });
    }
    if (before.lastSent === today && req.query.force !== '1') {
      return res.status(200).json({ skipped: 'already sent today' });
    }
    const { data, sent, failed, removed } = await sendToAll(buildMessage(today));
    data.lastSent = today;
    await writeJson(SUBS_PATH, data);
    return res.status(200).json({ date: today, sent, failed, removed });
  } catch (err) {
    console.error('remind error', err);
    return res.status(502).json({ error: 'Reminder failed' });
  }
}
