const CACHE_NAME = 'v1_pwa_app_cache';
const urlsToCache = [
  './',
  'index.html',
  '404.html',
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
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve la respuesta almacenada en caché si está disponible
        // o muestra una página de respaldo si no hay conexión a Internet
        return response || caches.match('404.html');
      })
      .catch(error => console.log('Falló al solicitar recursos', error))
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  // Realiza la acción deseada al hacer clic en la notificación
  // Por ejemplo, redirigir a una URL específica o ejecutar una función
});

self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: 'assets/images/logo/s2.png',
    //   vibrate: [200, 100, 200, 100, 200, 100, 200],
    };

    event.waitUntil(
      self.registration.showNotification('¡Hola!', options)
    );
  }
});
