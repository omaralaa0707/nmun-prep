// Builds one HTML document with every reading unit (delegation units first), for conversion to a Google Doc.
// Usage: node build-doc.mjs <app dir> <output .html>
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const [, , appDir, out] = process.argv;
const ctx = { window: {} };
for (const f of ['units.js', 'units2.js', 'depth1.js', 'depth2.js', 'mine1.js', 'mine2.js']) vm.runInNewContext(readFileSync(`${appDir}/data/${f}`, 'utf8'), ctx);
const w = ctx.window;
const depth = w.UNIT_DEPTH || {};
const units = w.UNITS.map((u) => (depth[u.id] ? { ...u, mins: u.mins + depth[u.id].mins, html: `${u.html}<h2>In depth</h2>${depth[u.id].html}` } : u));
for (const n of w.UNITS_NEW || []) { const i = units.findIndex((u) => u.id === n.after); units.splice(i < 0 ? units.length : i + 1, 0, n); }
// Order: UN foundations, principal organs, the delegation units, then everything else.
const core = units.filter((u) => u.id !== 'interview');
const cut = core.map((u) => u.group).lastIndexOf('Principal organs') + 1;
const all = [...core.slice(0, cut), ...(w.UNITS_MINE || []), ...core.slice(cut)];

function clean(html) {
  return html
    .replace(/<h3>/g, '<h4>').replace(/<\/h3>/g, '</h4>')
    .replace(/<h2[^>]*>/g, '<h3>').replace(/<\/h2>/g, '</h3>')
    .replace(/<div class="say">([\s\S]*?)<\/div>/g, '<blockquote><p><b>Model answer:</b> <i>$1</i></p></blockquote>')
    .replace(/<div class="(note|warn)">([\s\S]*?)<\/div>/g, '<p><i>Note: $2</i></p>')
    .replace(/<p class="note">([\s\S]*?)<\/p>/g, '<p><i>Note: $1</i></p>')
    .replace(/<span class="note">([\s\S]*?)<\/span>/g, ' <i>[$1]</i>')
    .replace(/<span class="[^"]*">([\s\S]*?)<\/span>/g, '$1')
    .replace(/<table>/g, '<table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse;width:100%">')
    .replace(/<th>/g, '<th style="background:#e8eef7;text-align:left">');
}

const groups = [...new Set(all.map((u) => u.group))];
let body = `<h1>NMUN 2027 Interview Readings</h1>
<p><b>Delegation:</b> Mozambique &middot; <b>Committees:</b> GA1 (first), UNHCR (second) &middot; <b>Interview:</b> Sunday 8 November 2026, 8:30 pm, P131 HUSS</p>
<p>Facts checked late October 2026. Items marked [check news] change often. Flashcards for every unit are in the app (nmun-prep.vercel.app).</p>
<h2>Contents</h2>`;
for (const g of groups) body += `<p><b>${g}</b><br>${all.filter((u) => u.group === g).map((u) => `${u.title} (${u.mins} min)`).join('<br>')}</p>`;
for (const g of groups) {
  body += `<h1>${g}</h1>`;
  for (const u of all.filter((x) => x.group === g)) body += `<h2>${u.title}</h2><p><i>About ${u.mins} min</i></p>${clean(u.html)}`;
}
writeFileSync(out, `<!doctype html><html><head><meta charset="utf-8"><title>NMUN 2027 Interview Readings</title>
<style>body{font-family:Arial,sans-serif;font-size:11pt}h1{font-size:20pt;color:#1a3d6d}h2{font-size:15pt;color:#1a3d6d}h3{font-size:13pt}h4{font-size:11.5pt}td,th{vertical-align:top}</style></head><body>${body}</body></html>`);
console.log(all.length, 'units in', groups.length, 'sections');
