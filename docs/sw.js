var CACHE_NAME="2023-01-06 18:34",urlsToCache=["/tegaki-kanji-search/","/tegaki-kanji-search/index.js","/tegaki-kanji-search/worker.js","/tegaki-kanji-search/demo.json","/tegaki-kanji-search/model/model.json","/tegaki-kanji-search/model/group1-shard1of1.bin","/tegaki-kanji-search/eraser.svg","/tegaki-kanji-search/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css","https://cdn.jsdelivr.net/npm/signature_pad@4.1.4/dist/signature_pad.umd.min.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.2.0/dist/tf.min.js"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})