const CACHE_NAME = 'drug-acct-v4';
const ASSETS = [
  './',
  './index.html',
  './lean.html',
  './help.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap'
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets reliably; font URL may fail offline — that's ok
      return cache.addAll(ASSETS).catch(() => cache.addAll(ASSETS.slice(0, 4)));
    })
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for local assets, network-first for fonts
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always try network first for Google Fonts (they CDN-rotate)
  if (url.hostname.includes('fonts.g')) {
    event.respondWith(
      fetch(event.request)
        .then(res => { caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone())); return res; })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for everything else (app shell)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res && res.status === 200) {
          caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
        }
        return res;
      });
    })
  );
});
