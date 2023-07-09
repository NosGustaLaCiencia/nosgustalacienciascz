;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_pwa_app_cache',
  urlsToCache = [
    './',
    'index.html',
    'assets/css/style.css',
    'assets/js/script.js',
    'js/script2.js',
    'assets/images/logo/s2.png',
    'assets/images/logo/s2.png',
  ]

  self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)//retorna una promesa
            .then(cache =>{cache.addAll(CACHE_ELEMENTS)//al pasarle addAll hacemos que pase todas las ruta al serviceWorker y devuelve una promesa
                .then( () => {
                    self.skipWaiting()
                }).catch(console.log)
            }
        )
    )
    
  })

  


//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      }).catch(err => console.log('Falló algo al solicitar recursos', err))
  )
})



