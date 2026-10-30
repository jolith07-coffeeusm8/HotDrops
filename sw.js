/* HDPWA service worker: cache-first offline, versioned cache. A new build changes VERSION,
   so the browser installs the new worker, it takes over, and old caches are deleted. */
const VERSION = '20261029-f31cf76c';
const CACHE = 'hdpwa-' + VERSION;
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('hdpwa-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;   // MUL / Drive etc. go to network untouched
  e.respondWith(caches.open(CACHE).then(c => c.match(req, { ignoreSearch: req.mode === 'navigate' }).then(hit => hit ||
    fetch(req).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; })
      .catch(() => req.mode === 'navigate' ? c.match('./index.html') : Response.error()))));
});
