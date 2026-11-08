// Actions-Prüfung: Skripte in index.html müssen sich fehlerfrei parsen lassen, alle Dateien müssen da sein.
import { readFileSync, existsSync } from 'node:fs';
const html = readFileSync('site/index.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!scripts.length) throw new Error('Kein <script> in index.html gefunden');
scripts.forEach((s, i) => { new Function(s); console.log(`script ${i}: ok`); });
for (const f of ['site/manifest.webmanifest','site/sw.js','site/icons/icon-192.png','site/icons/icon-512.png','site/pdf/Probetest_Wasser_A_B.pdf','site/pdf/Loesungen_Eltern.pdf'])
  { if (!existsSync(f)) throw new Error('Fehlt: ' + f); console.log('vorhanden:', f); }
const units = (html.match(/id:'u\d+'/g) || []).length;
console.log('Einheiten:', units); if (units < 9) throw new Error('Zu wenige Einheiten');
