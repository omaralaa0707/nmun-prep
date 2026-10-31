// Converts the app's reading units (HTML in JS) into Markdown knowledge files for the Claude Project.
// Usage: node build-knowledge.mjs <app dir> <output dir>
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const [, , appDir, outDir] = process.argv;
const ctx = { window: {} };
for (const f of ['units.js', 'units2.js', 'depth1.js', 'depth2.js', 'mine1.js', 'mine2.js']) vm.runInNewContext(readFileSync(`${appDir}/data/${f}`, 'utf8'), ctx);
// Same merge the app does: append "In depth" sections, then insert new units after their anchors.
const depth = ctx.window.UNIT_DEPTH || {};
const units = ctx.window.UNITS.map((u) => (depth[u.id] ? { ...u, html: `${u.html}<h2>In depth</h2>${depth[u.id].html}` } : u));
for (const n of ctx.window.UNITS_NEW || []) { const i = units.findIndex((u) => u.id === n.after); units.splice(i < 0 ? units.length : i + 1, 0, n); }

const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
function toMd(html) {
  let s = html;
  s = s.replace(/<table>([\s\S]*?)<\/table>/g, (_, body) => {
    const rows = [...body.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => c[1].replace(/\s+/g, ' ').trim()));
    if (!rows.length) return '';
    const width = Math.max(...rows.map((r) => r.length));
    const line = (r) => '| ' + Array.from({ length: width }, (_, i) => (r[i] || '').replace(/\|/g, '/')).join(' | ') + ' |';
    const hasHead = /<th/.test(body);
    const out = [line(rows[0])];
    out.push('| ' + Array(width).fill('---').join(' | ') + ' |');
    rows.slice(1).forEach((r) => out.push(line(r)));
    if (!hasHead) out.splice(0, 0, '| ' + Array(width).fill(' ').join(' | ') + ' |'), out.splice(1, 0, '| ' + Array(width).fill('---').join(' | ') + ' |'), out.splice(3, 1);
    return '\n' + out.join('\n') + '\n';
  });
  s = s.replace(/<h2>([\s\S]*?)<\/h2>/g, '\n### $1\n').replace(/<h3>([\s\S]*?)<\/h3>/g, '\n#### $1\n');
  s = s.replace(/<li>([\s\S]*?)<\/li>/g, '- $1\n').replace(/<\/?(ul|ol)>/g, '\n');
  s = s.replace(/<div class="(note|warn)">([\s\S]*?)<\/div>/g, '\n> $2\n').replace(/<div class="say">([\s\S]*?)<\/div>/g, '\n> Example answer: $1\n');
  s = s.replace(/<p>([\s\S]*?)<\/p>/g, '\n$1\n');
  s = s.replace(/<\/?strong>/g, '**').replace(/<\/?em>/g, '*').replace(/<span class="sym">([\s\S]*?)<\/span>/g, '$1');
  s = s.replace(/<[^>]+>/g, '');
  return decode(s).replace(/\n{3,}/g, '\n\n').trim();
}

const mine = ctx.window.UNITS_MINE || [];
const files = {
  '05_mozambique_and_topics.md': { title: 'My delegation: Mozambique (GA1 + UNHCR): country profile, committees, four topic briefs, situational questions', list: mine, test: () => true },
  '01_un_core.md': { title: 'UN core study material (history, Charter, organs, law, human rights, peace and security, development)', test: (u) => !u.group.startsWith('NMUN 2027') && u.group !== 'Country and conference skills' && u.id !== 'interview' },
};
for (const [name, { title, test, list = units }] of Object.entries(files)) {
  const parts = list.filter(test).map((u) => `## ${u.title}\n\n${toMd(u.html)}`);
  writeFileSync(`${outDir}/${name}`, `# ${title}\n\nFacts checked against UN sources as of late October 2026. Items that change often (officeholders, ongoing processes) should be checked against current news.\n\n${parts.join('\n\n---\n\n')}\n`);
  console.log(name, parts.length, 'units');
}
