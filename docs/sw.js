const CACHE_NAME="2023-12-28 19:30",urlsToCache=["/tegaki-kanji-search/","/tegaki-kanji-search/index.js","/tegaki-kanji-search/worker.js","/tegaki-kanji-search/demo.json","/tegaki-kanji-search/model/model.json","/tegaki-kanji-search/model/group1-shard1of1.bin","/tegaki-kanji-search/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/signature_pad@4.1.7/dist/signature_pad.umd.min.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.16.0/dist/tf.min.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})