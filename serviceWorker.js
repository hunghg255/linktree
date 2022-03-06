const staticDevCoffee = 'giahungv1';
const assets = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/avatar.jpeg',
  '/assets/images/call.svg',
  '/assets/images/email.svg',
  '/assets/images/facebook.svg',
  '/assets/images/github.svg',
  '/assets/images/instagram.svg',
  '/assets/images/linkedin.svg',
  '/assets/images/qr-code.png',
  '/assets/images/qrhung.png',
  '/assets/images/H16.png',
  '/assets/images/H24.png',
  '/assets/images/H32.png',
  '/assets/images/H64.png',
  '/assets/images/H128.png',
  '/assets/images/H256.png',
  '/assets/images/H512.png',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
