import { timingSafeEqual } from 'node:crypto';
import { get, put } from '@vercel/blob';

// Stores are created either private or public; try private first and remember what works.
let access = 'private';

async function withAccess(fn) {
  try {
    return await fn(access);
  } catch (err) {
    if (access === 'private' && /access|public|private/i.test(String(err && err.message))) {
      access = 'public';
      return fn(access);
    }
    throw err;
  }
}

export async function readJson(pathname) {
  const result = await withAccess((a) => get(pathname, { access: a, useCache: false }));
  if (!result || !result.stream) return null;
  const text = await new Response(result.stream).text();
  return text ? JSON.parse(text) : null;
}

export async function writeJson(pathname, value) {
  await withAccess((a) => put(pathname, JSON.stringify(value), {
    access: a,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60,
  }));
}

export function secretMatches(given, expected) {
  if (!expected || typeof given !== 'string') return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function passwordOk(req) {
  return secretMatches(req.headers['x-app-password'], process.env.APP_PASSWORD || '');
}

export function parseBody(req) {
  return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
}
