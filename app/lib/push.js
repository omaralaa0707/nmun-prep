import webpush from 'web-push';
import { readJson, writeJson } from './store.js';

export const SUBS_PATH = 'nmun-desk/push-subscriptions.json';

let configured = false;
function configure() {
  if (configured) return;
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || 'mailto:noreply@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
  );
  configured = true;
}

export async function loadSubs() {
  const data = await readJson(SUBS_PATH);
  return (data && Array.isArray(data.subs)) ? data : { subs: [], lastSent: null };
}

// Sends one payload to every saved device and drops subscriptions the push service says are gone.
export async function sendToAll(payload) {
  configure();
  const data = await loadSubs();
  const results = await Promise.allSettled(data.subs.map((s) => webpush.sendNotification(s.subscription, JSON.stringify(payload), { TTL: 3600 })));
  const keep = [];
  let sent = 0;
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') { sent++; keep.push(data.subs[i]); return; }
    const code = r.reason && r.reason.statusCode;
    if (code !== 404 && code !== 410) keep.push(data.subs[i]);
    console.error('push failed', code, r.reason && r.reason.body);
  });
  data.subs = keep;
  return { data, sent, failed: results.length - sent, removed: results.length - keep.length };
}

export { writeJson };
