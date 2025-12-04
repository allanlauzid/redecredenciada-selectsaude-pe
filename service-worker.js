// Identificador da versão atual do cache estático utilizado pelo PWA
const CACHE_NAME = "selectsaude-static-v3";

// Lista de arquivos essenciais que serão armazenados para permitir uso offline básico
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/data/rede_credenciada.csv",
  "/img/logo_select_operadora_192px.png",
  "/img/logo_select_operadora_512px.png"
];

// ========== INSTALL ==========
// Disparado quando o Service Worker é instalado; aqui pré-carregamos os arquivos principais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ========== ACTIVATE ==========
// Disparado quando uma nova versão do Service Worker é ativada; remove caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ========== FETCH ==========
// Intercepta requisições da aplicação para aplicar a estratégia de cache definida
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Apenas requisições GET são manipuladas pelo Service Worker
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Garante que só tratamos requisições da mesma origem (mesmo domínio do app)
  if (url.origin !== self.location.origin) return;

  // 1) Para navegação/HTML: tentamos primeiro a rede e, se falhar, usamos o index do cache
  if (
    request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html")
  ) {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  // 2) Para demais arquivos estáticos (CSS, JS, imagens, CSV): estratégia cache-first simples
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
