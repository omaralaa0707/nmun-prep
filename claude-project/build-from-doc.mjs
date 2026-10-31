// Builds the Coach Project's study-material files from the readings Google Doc (the source of truth).
// Usage: node build-from-doc.mjs <doc.json> <output dir>
// <doc.json> is a Google Docs API documents.get response (the Docs connector's read_doc output works as is).
import { readFileSync, writeFileSync } from 'node:fs';

const [, , docPath, outDir] = process.argv;
const raw = JSON.parse(readFileSync(docPath, 'utf8'));
const doc = raw.content || raw;
const body = (doc.tabs ? doc.tabs[0].documentTab.body : doc.body).content;

const text = (p) => p.elements.map((e) => (e.textRun ? e.textRun.content : '')).join('').replace(/\u000b/g, ' ').trim();
const cellText = (c) => c.content.filter((x) => x.paragraph).map((x) => text(x.paragraph)).join(' ').replace(/\|/g, '/').trim();
const level = { HEADING_1: 1, HEADING_2: 2, HEADING_3: 3, HEADING_4: 4 };

// Walk the Doc into H1 groups, skipping the title, the Contents block, day markers and reading-time lines.
const groups = [];
let group = null;
let skip = false;
for (const el of body) {
  if (el.paragraph) {
    const t = text(el.paragraph);
    const lv = level[el.paragraph.paragraphStyle.namedStyleType];
    if (lv === 1) { group = t === 'NMUN 2027' ? null : { title: t, lines: [] }; if (group) groups.push(group); skip = false; continue; }
    if (lv === 2) skip = t === 'Contents';
    if (!group || skip || !t || t.startsWith('▶') || /^About \d+ min$/.test(t)) continue;
    if (lv) group.lines.push(`\n${'#'.repeat(lv)} ${t}\n`);
    else group.lines.push(el.paragraph.bullet ? `- ${t}` : `\n${t}\n`);
  } else if (el.table && group && !skip) {
    const rows = el.table.tableRows.map((r) => r.tableCells.map(cellText));
    const width = Math.max(...rows.map((r) => r.length));
    const line = (r) => `| ${Array.from({ length: width }, (_, i) => r[i] || '').join(' | ')} |`;
    group.lines.push(['', line(rows[0]), `| ${Array(width).fill('---').join(' | ')} |`, ...rows.slice(1).map(line), ''].join('\n'));
  }
}

const files = {
  '05_mozambique_and_topics.md': {
    title: 'My delegation: Mozambique (GA1 + UNHCR): country profile, record, committee sheets, the four topic briefs, situational questions',
    test: (g) => g.title.startsWith('My delegation'),
  },
  '01_un_core.md': {
    title: 'UN core material: history, Charter, membership, the UN system, principal organs, law and security, speeches and resolutions',
    test: (g) => !g.title.startsWith('My delegation'),
  },
};
for (const [name, { title, test }] of Object.entries(files)) {
  const parts = groups.filter(test).map((g) => `# ${g.title}\n${g.lines.join('\n')}`);
  const md = `# ${title}\n\nThis is the same material as my readings Doc, current as of ${new Date().toISOString().slice(0, 10)}. Facts that change often (officeholders, ongoing processes) may have moved on since.\n\n${parts.join('\n\n---\n\n')}\n`;
  writeFileSync(`${outDir}/${name}`, md.replace(/\n{3,}/g, '\n\n'));
  console.log(name, `${md.split(/\s+/).length} words`);
}
