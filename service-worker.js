const CACHE = 'kd-style-35-pwa-v2.2';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));});
self.addEventListener('activate', e => {e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('kd-style-35-pwa-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));});
self.addEventListener('fetch', e => {if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return; e.respondWith(fetch(e.request).then(response => {if (response.ok) {const copy = response.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));} return response;}).catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));});
