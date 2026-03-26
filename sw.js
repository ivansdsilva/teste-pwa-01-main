const CACHE_NAME = 'tarot-cache-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  // Adicione aqui os caminhos das suas imagens principais se quiser que funcione offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});