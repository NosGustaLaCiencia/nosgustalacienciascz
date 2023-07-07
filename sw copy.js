const CACHE_NAME = 'v1_pwa_app_cache';
const urlsToCache = [
  './',
  'index.html',
  'assets/css/style.css',
  'assets/js/script.js',
  'js/script2.js',
  'assets/images/logo/s2.png',
  'assets/images/logo/s2.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch(error => console.log('Falló el registro de la caché', error))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(error => console.log('Falló al solicitar recursos', error))
  );
});







