import { createECDH } from 'node:crypto';
import { parseBody, passwordOk } from '../lib/store.js';
import { SUBS_PATH, loadSubs, sendToAll, writeJson } from '../lib/push.js';

// GET: the public VAPID key. POST: save this device's subscription. DELETE: remove it. POST ?action=test: send a test push.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'GET') {
    let keysMatch = null;
    try {
      const ecdh = createECDH('prime256v1');
      ecdh.setPrivateKey(Buffer.from(process.env.VAPID_PRIVATE_KEY || '', 'base64url'));
      keysMatch = ecdh.getPublicKey().toString('base64url') === process.env.VAPID_PUBLIC_KEY;
    } catch { keysMatch = false; }
    return res.status(200).json({ publicKey: process.env.VAPID_PUBLIC_KEY || null, keysMatch });
  }
  if (!passwordOk(req)) return res.status(401).json({ error: 'Wrong password' });
  if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    return res.status(503).json({ error: 'Push keys are not configured' });
  }
  try {
    if (req.method === 'POST' && req.query.action === 'test') {
      const { data, sent, failed } = await sendToAll({ title: 'Test reminder', body: 'Notifications are working. See you at 8:20 PM.', url: '/#today' });
      await writeJson(SUBS_PATH, data);
      return res.status(200).json({ sent, failed });
    }
    const body = parseBody(req);
    const sub = body.subscription;
    if (!sub || typeof sub.endpoint !== 'string') return res.status(400).json({ error: 'Missing subscription' });
    const data = await loadSubs();
    data.subs = data.subs.filter((s) => s.subscription.endpoint !== sub.endpoint);
    if (req.method === 'POST') {
      data.subs.push({ subscription: sub, label: String(body.label || 'Device').slice(0, 60), added: new Date().toISOString() });
    } else if (req.method !== 'DELETE') {
      res.setHeader('Allow', 'GET, POST, DELETE');
      return res.status(405).json({ error: 'Method not allowed' });
    }
    await writeJson(SUBS_PATH, data);
    return res.status(200).json({ ok: true, devices: data.subs.length });
  } catch (err) {
    console.error('push api error', err);
    return res.status(502).json({ error: 'Storage error' });
  }
}
