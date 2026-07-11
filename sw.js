/* ═══════════════════════════════════════════════════════ SERVICE WORKER - APP OFFLINE ═══════════════════════════════════════════════════════ */

const CACHE_NAME = 'principios-basicos-v13';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './WhatsApp Image 2026-04-14 at 00.37.04.jpeg',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto:', CACHE_NAME);
        return cache.addAll(urlsToCache).catch(function(err) {
          console.warn('Error cacheando recursos:', err);
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

<<<<<<< Updated upstream
// Interceptar peticiones (CACHE-FIRST con red como respaldo)
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  // Para Google Fonts, usar estrategia Stale-While-Revalidate
=======
// Interceptar peticiones (CACHE-FIRST con estrategia específica para fonts)
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  // Google Fonts: stale-while-revalidate
>>>>>>> Stashed changes
  if (event.request.url.indexOf('fonts.googleapis.com') !== -1 ||
      event.request.url.indexOf('fonts.gstatic.com') !== -1) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        var fetchPromise = fetch(event.request).then(function(response) {
          if (response && response.ok) {
            var copy = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, copy);
            });
          }
          return response;
        }).catch(function() {
          return cached;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(function(response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(function(error) {
            console.log('Error fetching:', error);
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});