// Offline-Cache für die Forscher-Insel. VERSION wird von GitHub Actions bei jedem Deploy ersetzt.
const VERSION = '__BUILD__';
const CACHE = 'forscher-insel-' + VERSION;
const CORE = ['./', 'index.html', 'topics.bundle.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'pdf/Probetest_Wasser_A_B.pdf', 'pdf/Loesungen_Eltern.pdf'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('forscher-insel-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('topics.bundle.js'))) {
    // Seite: zuerst Netz (neueste Version), sonst Cache
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  // Rest (Schriften, Icons, PDFs): Cache zuerst
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return r;
  })));
});
