'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "183a1462c90403c98addda277cf589e2",
"assets/AssetManifest.bin.json": "e7b8c7a4c328b2bb06ca0523d869caad",
"assets/AssetManifest.json": "b5358bb872085550d4cde417f01a29d4",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "f9929052b526bf606d3128c4c3ad8b44",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/icons/alert.png": "b20544c80bfe5283831b2d7185dd5369",
"assets/assets/icons/car.png": "068fe498b825ea819ad911bb06121586",
"assets/assets/icons/contacts_1.png": "f1a18fbd73555a8923b835e623e34f6a",
"assets/assets/icons/contacts_2.png": "2021c393a619ae11f617ca7b14481039",
"assets/assets/icons/home.png": "5b874de7ef38d94f5fa576138449c7f4",
"assets/assets/icons/home_icon.png": "adeee58f3452e29c23904049f167ac5c",
"assets/assets/icons/logout.png": "6df6f331df59ea143b51e36163102dfe",
"assets/assets/icons/logo_qes.png": "ddd9513bc6706248b5e596888613857c",
"assets/assets/icons/other.png": "546bfe4010774f6ffdfedd3d2c5d3b6f",
"assets/assets/images/app_logo.png": "6682eac0a1d5d56fb3fd39b7608b2829",
"assets/assets/images/azolik_sert.png": "6f9799f0cf1218bf347c15a42285c844",
"assets/assets/images/error.gif": "9b6676bde88262d50a7b2b2620bf8768",
"assets/assets/images/formula_1.png": "9c0e5e634089239a8e69b9d3d2e3ee4e",
"assets/assets/images/formula_2.png": "c1eb9d287acb78468639b5f6bcb529f4",
"assets/assets/images/formula_3.png": "b2b8c647738891ad78057f157e2b5130",
"assets/assets/images/formula_4.png": "dd80fe89caef49c1f73c7ac8c3323541",
"assets/assets/images/formula_5.png": "1a16899d4a5b2e7b5d36653ff8a481b1",
"assets/assets/images/formula_6.png": "9a5fdbe57160b686798804e9fd534195",
"assets/assets/images/formula_7.png": "b235636c48f8b439222956f4ff4ba9b3",
"assets/assets/images/guvohnoma.png": "f00d56a16fd609ffad76e876606c148d",
"assets/assets/images/litsenzia.png": "438dd91a4cc6f1b0f1aeb3f972facb18",
"assets/assets/images/login_walpaper.png": "a1dc6125d0e24e881c1983a75af8afed",
"assets/assets/images/norma_chas.png": "9c04df54f200d6b4532c3d77d42b7c45",
"assets/assets/images/norma_chas_2.png": "602ccae89934ad79d4306f26018c7543",
"assets/assets/images/sertifikat.png": "ad4be2e4f944cd92ef79aef6e6b0c306",
"assets/assets/images/sugurta.png": "9fdb49f39a635d4a00433d902aa47f30",
"assets/assets/images/telegram.png": "76c88ae4d44e66322fdaddff3e0b5d84",
"assets/assets/images/user_avatar.png": "34e6d27d8b24d2372454bfe83395e4b3",
"assets/assets/images/user_avatar_girl.png": "bcce1a77656375c96fb08ac441553fe1",
"assets/assets/wallpaper/wallpaper_0.JPG": "ffc0ff7d89e4872412a8ca355b8ab40b",
"assets/assets/wallpaper/wallpaper_1.JPG": "388f649438743d5ebd334e61cabd242c",
"assets/assets/wallpaper/wallpaper_10.JPG": "86555c0495e718ffef006ac30b4642a5",
"assets/assets/wallpaper/wallpaper_11.JPG": "d314eeaec70f8c2d7542f41873fbc1a7",
"assets/assets/wallpaper/wallpaper_12.JPG": "4879056f70e58e89f73cce87c69d4fb3",
"assets/assets/wallpaper/wallpaper_13.JPG": "77071d2af11c44bb5cc0d104168a54b4",
"assets/assets/wallpaper/wallpaper_14.JPG": "9e5c19589726c5f1bb9188c0690732e8",
"assets/assets/wallpaper/wallpaper_15.JPG": "9fbe701c9d11a29c6a15f588ddc92858",
"assets/assets/wallpaper/wallpaper_16.JPG": "0cf3f25ec41fcde340647ce97b3da116",
"assets/assets/wallpaper/wallpaper_17.JPG": "084d5fa304dbaeb73a7d9d4c7040ba01",
"assets/assets/wallpaper/wallpaper_18.JPG": "f34a5ea3a377d06263f76c492b6a1cf5",
"assets/assets/wallpaper/wallpaper_19.JPG": "df81804fd71d12d331b1d3581232c94c",
"assets/assets/wallpaper/wallpaper_2.JPG": "633c1d076f3c2d73d43bb667ec15f23a",
"assets/assets/wallpaper/wallpaper_20.JPG": "e42dd501ac0b38a45d6cfb134442ecd6",
"assets/assets/wallpaper/wallpaper_21.JPG": "5f1437caf80686c44b0e0d9ad43be18d",
"assets/assets/wallpaper/wallpaper_22.JPG": "5072adf7585e48e68edd5e879eb1b09d",
"assets/assets/wallpaper/wallpaper_23.JPG": "2bb5d3411528cba525687b33b8e8ef09",
"assets/assets/wallpaper/wallpaper_24.JPG": "199ade309eed16a9a2e17305e9544cd0",
"assets/assets/wallpaper/wallpaper_25.JPG": "6ba88f728176329bd9981a2b634ff344",
"assets/assets/wallpaper/wallpaper_26.JPG": "7b9037c2b96b81cb748e9272aed1e838",
"assets/assets/wallpaper/wallpaper_27.JPG": "1766ec22b2ccc35db5f7ade33388ff11",
"assets/assets/wallpaper/wallpaper_28.JPG": "59b86a6e0b84ba0c83049a13893bb153",
"assets/assets/wallpaper/wallpaper_29.JPG": "1ef2f4eabd1241a98f3ec7bd7d78ec9b",
"assets/assets/wallpaper/wallpaper_3.JPG": "b952b43c170fe484234ce740e2ac3b16",
"assets/assets/wallpaper/wallpaper_30.JPG": "f8d43a6c1dd8ff28171e4d6894d55b67",
"assets/assets/wallpaper/wallpaper_31.JPG": "024fedc837163576865932ce917fe8bf",
"assets/assets/wallpaper/wallpaper_32.JPG": "b4048b21fa8faba28c77b7f27f81b996",
"assets/assets/wallpaper/wallpaper_33.JPG": "93aa2c6e6f7a5b2644e473215f68890a",
"assets/assets/wallpaper/wallpaper_34.JPG": "b7570f858fffb8e1795d2940ce020975",
"assets/assets/wallpaper/wallpaper_35.JPG": "7874c1025d9b74692aa76964400430df",
"assets/assets/wallpaper/wallpaper_36.JPG": "4721bbed17830c43aa069f7f33e12246",
"assets/assets/wallpaper/wallpaper_37.JPG": "1b6c588a48b281a260f31fc25c27ee0f",
"assets/assets/wallpaper/wallpaper_38.JPG": "910a354f20694398594735f9299717ba",
"assets/assets/wallpaper/wallpaper_39.JPG": "004fa89545caad601b34d9225f7e8cad",
"assets/assets/wallpaper/wallpaper_4.JPG": "02dd5e3840b42347828e8fa197ce49cd",
"assets/assets/wallpaper/wallpaper_40.JPG": "e6c95727975a1f29af9c30eb01038b48",
"assets/assets/wallpaper/wallpaper_41.JPG": "f6015824895b230b12052b94873e8eea",
"assets/assets/wallpaper/wallpaper_42.JPG": "ab00bd4d98d279636e3c57f47fa8ed4f",
"assets/assets/wallpaper/wallpaper_43.JPG": "7229e7c10cada29df81b56b681fa1526",
"assets/assets/wallpaper/wallpaper_44.JPG": "bb0331d78a6bb52ff30ef47c2be20126",
"assets/assets/wallpaper/wallpaper_45.JPG": "9ef06b1bf26b3a9689b7873fcc872c64",
"assets/assets/wallpaper/wallpaper_46.JPG": "2cc47c69a7e8d577f4c7d6959b206fba",
"assets/assets/wallpaper/wallpaper_47.JPG": "13ffa412697b571f685a07e9d509d676",
"assets/assets/wallpaper/wallpaper_48.JPG": "3160a7db1f15f02bc479a3deb93abec4",
"assets/assets/wallpaper/wallpaper_49.JPG": "bad144582193e10924f9e6665952dad9",
"assets/assets/wallpaper/wallpaper_5.JPG": "fe169a69cd2f4c977cf044c72546f157",
"assets/assets/wallpaper/wallpaper_6.JPG": "dc2b0a40d55990dbde2e08033dd167b8",
"assets/assets/wallpaper/wallpaper_7.JPG": "c52d1bcd8e654706838eb4ee78adac40",
"assets/assets/wallpaper/wallpaper_8.JPG": "25ed23ac647e27b422f8c101ae30f7d7",
"assets/assets/wallpaper/wallpaper_9.JPG": "9e27337dd78ac2df8d64dbb88ba41290",
"assets/FontManifest.json": "45e3f9580590128a8056c795f967e441",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fbf3599c6dcd0f7a218a6d2ad1f9efaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f7a8fd37d5cca958dae3773a0ce3cc8",
"/": "9f7a8fd37d5cca958dae3773a0ce3cc8",
"main.dart.js": "903deaa5553a59590cecaa238faff262",
"manifest.json": "cc6efa97b2f1d7c88d8f71246581f9eb",
"version.json": "887a0cc1dd32136ada297b32e5304a2c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
