// Speichert die App inkl. Texterkennung, damit sie auch offline startet.
// Bei Änderungen an den Dateien die Versionsnummer erhöhen.
const CACHE = 'cut-buchung-v1';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './ocr/tesseract.min.js',
  './ocr/worker.min.js',
  './ocr/tesseract-core-simd-lstm.wasm.js',
  './ocr/tesseract-core-lstm.wasm.js',
  './ocr/deu.traineddata.gz'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Seite: erst Netz (damit Updates ankommen), sonst Cache. Übrige Dateien: erst Cache.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
