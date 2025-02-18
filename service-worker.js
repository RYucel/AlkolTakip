const CACHE_NAME = 'alkol-takip-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'manifest.json',
    'icon.png',
    'icon-512x512.png',
    'images/bira.png',
    'images/viski.png',
    'images/raki.png',
    'images/zivania.png',
    'images/sarap.png',
    'images/cin.png',
    'images/votka.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache açıldı ve dosyalar ekleniyor.');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});