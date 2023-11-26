const CACHE_NAME = "2023-11-27 00:20";
const urlsToCache = [
  "/tegaki-kanji-search/",
  "/tegaki-kanji-search/index.js",
  "/tegaki-kanji-search/worker.js",
  "/tegaki-kanji-search/demo.json",
  "/tegaki-kanji-search/model/model.json",
  "/tegaki-kanji-search/model/group1-shard1of1.bin",
  "/tegaki-kanji-search/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/signature_pad@4.1.7/dist/signature_pad.umd.min.js",
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.13.0/dist/tf.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
