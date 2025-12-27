const cacheName = "2025-12-28 00:00";
const urlsToCache = [
  "/tegaki-kanji-search/index.js",
  "/tegaki-kanji-search/worker.js",
  "/tegaki-kanji-search/demo.json",
  "/tegaki-kanji-search/model/model.json",
  "/tegaki-kanji-search/model/group1-shard1of1.bin",
  "/tegaki-kanji-search/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js",
];

async function preCache() {
  const cache = await caches.open(cacheName);
  await Promise.all(
    urlsToCache.map((url) =>
      cache.add(url).catch((err) => console.warn("Failed to cache", url, err))
    ),
  );
  self.skipWaiting();
}

async function handleFetch(event) {
  const cached = await caches.match(event.request);
  return cached || fetch(event.request);
}

async function cleanOldCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map((name) => name !== cacheName ? caches.delete(name) : null),
  );
  self.clients.claim();
}

self.addEventListener("install", (event) => {
  event.waitUntil(preCache());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(handleFetch(event));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(cleanOldCaches());
});
