importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "7343a5d47dcdbb89c7d69bc6bca49b88"
  },
  {
    "url": "inline.2fcbc9154ee191f8ee30.bundle.js",
    "revision": "df69aee0b388e6759aa86f06064315ec"
  },
  {
    "url": "main.f868b876f527013948ee.bundle.js",
    "revision": "799c023afd0bfb4f3b49bdf108cd72c5"
  },
  {
    "url": "polyfills.337db143b9a9630c10a6.bundle.js",
    "revision": "854491caff7a7052a578c365385da5a6"
  },
  {
    "url": "styles.b92399fbcd586e52bf79.bundle.css",
    "revision": "b92399fbcd586e52bf793e41aad3cff8"
  },
  {
    "url": "vendor.bbbdbd9503d40cfbf38f.bundle.js",
    "revision": "e0847ad244ffd375ee6f2ddefe1faebc"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "f5b4485fef5ee8e99d5886785f30888f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
