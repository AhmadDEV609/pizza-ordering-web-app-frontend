// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
    // This example just fetches normally, no caching yet
    event.respondWith(fetch(event.request));
});
