"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portafolio/index.html","1b08b54249b66f110b86c4a667ed2ab0"],["/portafolio/static/css/main.3f384b4a.css","fef909e3c9bef1d7a33dfa3f76214bbb"],["/portafolio/static/js/main.0237469c.js","aadf1751c16281c601dc93c1411a4422"],["/portafolio/static/media/TerminusTTF-4.46.0.e829cfaa.ttf","e829cfaa3fe9854a976b0814dbd2732b"],["/portafolio/static/media/foro.4b234f8a.png","4b234f8a4384965f651b401ff8ac8352"],["/portafolio/static/media/gamelab.4fa49fe8.png","4fa49fe86b95e8238751818fce2c79cf"],["/portafolio/static/media/gameplanet.1c00ae7a.png","1c00ae7ac20170d7cb9faa821fd2aa9a"],["/portafolio/static/media/icomoon.06ade6ef.woff","06ade6ef5fc9dfad273b8aca51adb2c3"],["/portafolio/static/media/icomoon.114e4f81.ttf","114e4f81021a9176007b3b20cd8bb41c"],["/portafolio/static/media/icomoon.2205fdf6.svg","2205fdf61e5402f706197d7be9f4f8a2"],["/portafolio/static/media/icomoon.fb4385af.eot","fb4385af4bcc36fd14dafeabfb806f3a"],["/portafolio/static/media/laptopcom.56681d8c.jpg","56681d8c0e2fc150463effaecda183a3"],["/portafolio/static/media/last_paradise-webfont.69d9ace3.ttf","69d9ace3bc866372abd0c74cb2b006c8"],["/portafolio/static/media/lift.4eb89af2.png","4eb89af252de4da09d913e983ae6e566"],["/portafolio/static/media/portadacom.e1ba0242.jpg","e1ba0242fe7b3ac90182931880218806"],["/portafolio/static/media/quizabc.0e1c4d93.png","0e1c4d9387621b946ac21b1268ba5fd2"],["/portafolio/static/media/registerapp.9c12bafa.png","9c12bafa309468567b5a0f9c34c9aa9e"],["/portafolio/static/media/routing.988cc699.png","988cc69958646cbdc702564208cea6f6"],["/portafolio/static/media/scoreboard.a13cdb17.png","a13cdb1723fa7e8e030fa0f8f1d0a827"],["/portafolio/static/media/startstudio.837b78d3.png","837b78d3377ae2e4ba489b1e765ad11d"],["/portafolio/static/media/sushi.73272e05.png","73272e05a8a947cf4aea15113c35e8e2"],["/portafolio/static/media/trellophoenix.db6a7ce1.png","db6a7ce182aa4f0e656e41dd549ab1ce"],["/portafolio/static/media/yanapa.f5e4e8ee.png","f5e4e8ee6106036ec7ba665cd3a6eea8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/portafolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});