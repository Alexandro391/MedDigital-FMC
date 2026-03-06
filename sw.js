// FMC Caderneta Digital - Service Worker v2.0
const CACHE_NAME = 'fmc-caderneta-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/aluno.html',
  '/preceptor.html',
  '/coordenacao.html',
  '/css/style.css',
  '/js/app.js',
  '/pwa/manifest.json'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching core assets');
      return cache.addAll(ASSETS).catch(err => console.warn('[SW] Cache partial fail:', err));
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for assets, network-first for Firebase
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip Firebase and external requests — always network
  if (url.hostname.includes('firebase') || url.hostname.includes('google') || url.hostname.includes('gstatic')) {
    return; // Let browser handle
  }

  // Cache-first for own assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        // Offline fallback for HTML pages
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
