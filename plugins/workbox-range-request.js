workbox.routing.registerRoute(
  /.*\.(mp4|webm)/,
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [200] }),
      new workbox.rangeRequests.Plugin(),
    ],
  }),
)
