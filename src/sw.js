var CACHE_NAME = '2021-05-27 09:45';
var urlsToCache = [
  '/tegaki-kanji-search/',
  '/tegaki-kanji-search/index.js',
  '/tegaki-kanji-search/demo.json',
  '/tegaki-kanji-search/model/model.json',
  '/tegaki-kanji-search/model/group1-shard1of1.bin',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js',
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
