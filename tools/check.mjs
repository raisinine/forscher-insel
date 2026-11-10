// Actions-Prüfung: App-Skript parsen, alle Themen-Dateien laden und Inhalte prüfen.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
const FAECHER = ['deutsch','mathe','sachunterricht','englisch','religion','ethik','musik','kunst','sport'];
const OPS = ['nennen','beschreiben','erklaeren','begruenden','vergleichen'];
const html = readFileSync('site/index.html', 'utf8');
[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, i) => { new Function(m[1]); console.log(`index.html script ${i}: ok`); });
globalThis.window = {};
const files = readdirSync('site/topics').filter(f => f.endsWith('.js')).sort();
if (!files.length) throw new Error('Keine Themen in site/topics');
const fail = (f, msg) => { throw new Error(`${f}: ${msg}`); };
const ids = new Set(), slots = new Set();
for (const f of files) {
  const before = (window.TOPICS || []).length;
  new Function('window', readFileSync('site/topics/' + f, 'utf8'))(window);
  if ((window.TOPICS || []).length !== before + 1) fail(f, 'Datei muss genau ein Thema mit window.TOPICS.push({...}) hinzufügen');
  const t = window.TOPICS[window.TOPICS.length - 1];
  const m = f.match(/^k(\d+)-([a-z]+)-(\d+)-[a-z0-9-]+\.js$/);
  if (!m) fail(f, 'Dateiname muss so aussehen: k3-sachunterricht-02-wasser.js');
  for (const k of ['id', 'fach', 'klasse', 'nr', 'title', 'ko', 'units']) if (t[k] == null || t[k] === '') fail(f, `Feld fehlt: ${k}`);
  if (!/^[a-z]+$/.test(t.id)) fail(f, 'id nur Kleinbuchstaben a-z');
  if (ids.has(t.id)) fail(f, 'id doppelt: ' + t.id); ids.add(t.id);
  if (!FAECHER.includes(t.fach)) fail(f, `fach muss eines davon sein: ${FAECHER.join(', ')}`);
  if (+m[1] !== t.klasse || m[2] !== t.fach || +m[3] !== t.nr) fail(f, `Dateiname passt nicht zu klasse/fach/nr (${t.klasse}/${t.fach}/${t.nr})`);
  const slot = `${t.klasse}-${t.fach}-${t.nr}`; if (slots.has(slot)) fail(f, 'Klasse/Fach/Nr doppelt: ' + slot); slots.add(slot);
  const qids = new Set(), uids = new Set();
  for (const [k, s] of Object.entries(t.stories || {})) if (!s.title || !Array.isArray(s.p)) fail(f, `Lesetext ${k}: title und p nötig`);
  for (const u of t.units) {
    for (const st of (u.lesson && u.lesson.steps) || []) if (st.story && !(t.stories && t.stories[st.story])) fail(f, `Station ${u.id}: Lesetext ${st.story} fehlt`);
    if (!u.id || !u.title || !Array.isArray(u.merk) || !Array.isArray(u.words) || !Array.isArray(u.q)) fail(f, `Station unvollständig: ${u.id}`);
    uids.add(u.id);
    for (const q of u.q) {
      if (qids.has(q.id)) fail(f, `doppelte Aufgaben-ID ${q.id}`); qids.add(q.id);
      const ok = { mc: () => Array.isArray(q.o) && q.a >= 0 && q.a < q.o.length, tf: () => typeof q.a === 'boolean',
        order: () => Array.isArray(q.items), sort: () => Array.isArray(q.cats) && Array.isArray(q.items),
        match: () => Array.isArray(q.pairs), cloze: () => Array.isArray(q.ans) && (q.text.match(/\{\d\}/g) || []).length === q.ans.length && q.ans.every(a => q.bank.includes(a)),
        free: () => !!q.model, spell: () => typeof q.a === 'string' && q.a.trim() === q.a && q.a.length > 0 }[q.t];
      if (q.st && !(t.stories && t.stories[q.st])) fail(f, `Aufgabe ${q.id}: Lesetext ${q.st} fehlt in stories`);
      if (!ok || !ok()) fail(f, `Aufgabe ${q.id} (Typ ${q.t}) fehlerhaft`);
    }
  }
  for (const w of t.schreiben || []) {
    if (!w.id || !w.q || !w.model || !OPS.includes(w.op)) fail(f, `Schreibaufgabe ${w.id || '?'}: id, q, model und op (${OPS.join('/')}) nötig`);
    if (!uids.has(w.unit)) fail(f, `Schreibaufgabe ${w.id}: Station ${w.unit} gibt es nicht`);
    if (!Array.isArray(w.words) || w.words.length < 3 || !w.words.every(x => Array.isArray(x) && x.length === 3)) fail(f, `Schreibaufgabe ${w.id}: words = [[Wort, Stamm, Koreanisch], …] (mind. 3)`);
    if (!w.kern || !Array.isArray(w.kern.o) || !(w.kern.a >= 0 && w.kern.a < w.kern.o.length)) fail(f, `Schreibaufgabe ${w.id}: kern fehlerhaft`);
    if (w.st && !(t.stories && t.stories[w.st])) fail(f, `Schreibaufgabe ${w.id}: Lesetext ${w.st} fehlt`);
    if (w.parts && !w.parts.every(p => p.de && Array.isArray(p.k))) fail(f, `Schreibaufgabe ${w.id}: parts = [{de, k:[…]}]`);
    if (qids.has('s:' + w.id)) fail(f, `Schreibaufgabe doppelt: ${w.id}`); qids.add('s:' + w.id);
  }
  for (const p of t.pdfs || []) if (!existsSync('site/' + p.file)) fail(f, `PDF fehlt: ${p.file}`);
  console.log(`✓ Klasse ${t.klasse} · ${t.fach} · Thema ${t.nr} (${t.id}): ${t.units.length} Stationen, ${qids.size - (t.schreiben||[]).length} Aufgaben, ${(t.schreiben || []).length} Schreibaufgaben`);
}
for (const f of ['site/manifest.webmanifest', 'site/sw.js', 'site/icons/icon-192.png']) if (!existsSync(f)) throw new Error('Fehlt: ' + f);
