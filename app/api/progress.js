import { parseBody, passwordOk, readJson, writeJson } from '../lib/store.js';

const PATHNAME = 'nmun-desk/progress.json';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!passwordOk(req)) {
    return res.status(401).json({ error: 'Wrong password' });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({ error: 'Storage is not connected yet' });
  }
  try {
    if (req.method === 'GET') {
      return res.status(200).json({ progress: await readJson(PATHNAME) });
    }
    if (req.method === 'PUT') {
      const body = parseBody(req);
      if (!body || typeof body.progress !== 'object') {
        return res.status(400).json({ error: 'Missing progress' });
      }
      if (JSON.stringify(body.progress).length > 2_000_000) {
        return res.status(413).json({ error: 'Progress too large' });
      }
      await writeJson(PATHNAME, body.progress);
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('progress storage error', err);
    return res.status(502).json({ error: 'Storage error' });
  }
}
