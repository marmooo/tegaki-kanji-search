const CACHE_NAME="2023-08-17 08:35",urlsToCache=["/tegaki-kanji-search/","/tegaki-kanji-search/index.js","/tegaki-kanji-search/worker.js","/tegaki-kanji-search/demo.json","/tegaki-kanji-search/model/model.json","/tegaki-kanji-search/model/group1-shard1of1.bin","/tegaki-kanji-search/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/signature_pad@4.1.6/dist/signature_pad.umd.min.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.11.0/dist/tf.min.js"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})