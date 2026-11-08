// Actions-Prüfung: Themen bündeln-Ergebnis laden, App-Skript parsen, Themen-Daten prüfen.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
const html = readFileSync('site/index.html', 'utf8');
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
inline.forEach((s, i) => { new Function(s); console.log(`index.html script ${i}: ok`); });
globalThis.window = {};
const files = readdirSync('site/topics').filter(f => /^\d+.*\.js$/.test(f)).sort();
if (!files.length) throw new Error('Keine Themen in site/topics');
for (const f of files) { new Function('window', readFileSync('site/topics/' + f, 'utf8'))(window); console.log('Thema geladen:', f); }
const ids = new Set();
for (const t of window.TOPICS) {
  for (const k of ['id', 'title', 'ko', 'units']) if (!t[k]) throw new Error(`Thema ohne ${k}: ${t.id || '?'}`);
  if (ids.has(t.id)) throw new Error('Doppelte Themen-ID: ' + t.id); ids.add(t.id);
  if (!/^[a-z]+$/.test(t.id)) throw new Error('Themen-ID nur Kleinbuchstaben a-z: ' + t.id);
  const qids = new Set();
  for (const u of t.units) {
    if (!u.id || !u.title || !Array.isArray(u.merk) || !Array.isArray(u.words) || !Array.isArray(u.q)) throw new Error(`${t.id}: Station unvollständig: ${u.id}`);
    for (const q of u.q) {
      if (qids.has(q.id)) throw new Error(`${t.id}: doppelte Aufgaben-ID ${q.id}`); qids.add(q.id);
      const ok = { mc: () => Array.isArray(q.o) && q.a >= 0 && q.a < q.o.length, tf: () => typeof q.a === 'boolean',
        order: () => Array.isArray(q.items), sort: () => Array.isArray(q.cats) && Array.isArray(q.items),
        match: () => Array.isArray(q.pairs), cloze: () => Array.isArray(q.ans) && (q.text.match(/\{\d\}/g) || []).length === q.ans.length && q.ans.every(a => q.bank.includes(a)),
        free: () => !!q.model }[q.t];
      if (!ok || !ok()) throw new Error(`${t.id}/${q.id}: Aufgabe vom Typ ${q.t} fehlerhaft`);
    }
  }
  for (const p of t.pdfs || []) if (!existsSync('site/' + p.file)) throw new Error(`${t.id}: PDF fehlt: ${p.file}`);
  console.log(`✓ ${t.id}: ${t.units.length} Stationen, ${qids.size} Aufgaben`);
}
for (const f of ['site/manifest.webmanifest', 'site/sw.js', 'site/icons/icon-192.png']) if (!existsSync(f)) throw new Error('Fehlt: ' + f);
