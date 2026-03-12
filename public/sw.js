const CACHE_NAME = 'radassist-v3';
const IMAGE_CACHE = 'radassist-images-v1';
const STATIC_ASSETS = [
    '/',
    '/manifest.json',
];

// Install event — cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate event — clean up old caches
self.addEventListener('activate', (event) => {
    const validCaches = [CACHE_NAME, IMAGE_CACHE];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => !validCaches.includes(name))
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();

    // Notify clients about the update
    self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => {
            client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME });
        });
    });
});

// Fetch event — strategy varies by request type
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Skip external URLs
    if (url.origin !== self.location.origin) return;

    // Skip API calls - always go to network
    if (url.pathname.startsWith('/api/')) return;

    // Image requests — stale-while-revalidate (cache first, update in background)
    if (event.request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|webp|gif|svg|ico)$/)) {
        event.respondWith(
            caches.open(IMAGE_CACHE).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    const fetchPromise = fetch(event.request).then((networkResponse) => {
                        if (networkResponse.ok) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    }).catch(() => cachedResponse || new Response('', { status: 404 }));

                    return cachedResponse || fetchPromise;
                });
            })
        );
        return;
    }

    // JS/CSS/HTML — network first, fallback to cache
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone the response and cache it
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) return cachedResponse;
                    // Return offline page for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('/');
                    }
                    return new Response('Offline', { status: 503 });
                });
            })
    );
});

// Push notification support
self.addEventListener('push', (event) => {
    if (!event.data) return;
    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.title || 'RadAsist', {
            body: data.body || 'Günün vakası hazır!',
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-192x192.png',
            data: { url: data.url || '/' },
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const url = event.notification.data?.url || '/';
    event.waitUntil(
        self.clients.openWindow(url)
    );
});
