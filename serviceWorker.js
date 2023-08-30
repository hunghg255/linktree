const staticDevCoffee = 'giahungv1';
const assets = [
  '/',
  '/index.html',
  '/service.js',
  '/assets/css/reset.css',
  '/assets/css/setting.css',
  '/assets/css/style.css',
  '/assets/js/main.js',
  'assets/images/2160p.mp4',
  'assets/images/bg.webp',
  '/assets/images/avatar.jpeg',
  '/assets/images/call.svg',
  'assets/images/discord.png',
  '/assets/images/email.svg',
  '/assets/images/facebook.svg',
  '/assets/images/github.svg',
  '/assets/images/instagram.svg',
  '/assets/images/linkedin.svg',
  'assets/images/skype.svg',
  'assets/images/spotify.png',
  '/assets/images/qr-code.png',
  '/assets/images/qrhung.png',
  'assets/images/tiktok.svg',
  'assets/images/twitter.svg',
  'assets/images/youtube.svg',
  '/assets/images/H16.png',
  '/assets/images/H24.png',
  '/assets/images/H32.png',
  '/assets/images/H64.png',
  '/assets/images/H128.png',
  '/assets/images/H256.png',
  '/assets/images/H512.png',
  'manifest.json',
  'https://res.cloudinary.com/hunghg255/image/upload/v1670472731/favicon_ml3hux.ico'
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
