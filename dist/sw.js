!function e(r,n,t){function o(i,s){if(!n[i]){if(!r[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(c)return c(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};r[i][0].call(l.exports,function(e){var n=r[i][1][e];return o(n?n:e)},l,l.exports,e,r,n,t)}return n[i].exports}for(var c="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({"/Users/JarviS/Practices/barcode-scanner/app/sw.js":[function(e,r,n){"use strict";e("serviceworker-cache-polyfill");var t="static-cache",o=1,c=["/","/index.html","/css/styles.css","/js/app.js","/main.js","/decoder.min.js","/images/touch/android-chrome-192x192.png","/images/touch/favicon-96x96.png","/images/touch/favicon-194x194.png"];self.oninstall=function(e){e.waitUntil(caches.open(t+"-v"+o).then(function(e){return e.addAll(c).then(function(e){return console.log("Files are cached successfully."),e})}))},self.onactivate=function(e){var r=t+"-v"+o;caches.keys().then(function(e){return Promise.all(e.map(function(e){return-1!=e.indexOf(t)&&e!=r?caches["delete"](e):void 0}))})},self.onfetch=function(e){var r=e.request;e.respondWith(caches.match(r).then(function(e){return e?e:fetch(r).then(function(e){var n=e.clone();return caches.open(t+"-v"+o).then(function(e){e.put(r,n)["catch"](function(e){console.warn(r.url+": "+e.message)})}),e})}))}},{"serviceworker-cache-polyfill":"/Users/JarviS/Practices/barcode-scanner/node_modules/serviceworker-cache-polyfill/index.js"}],"/Users/JarviS/Practices/barcode-scanner/node_modules/serviceworker-cache-polyfill/index.js":[function(e,r,n){Cache.prototype.add||(Cache.prototype.add=function(e){return this.addAll([e])}),Cache.prototype.addAll||(Cache.prototype.addAll=function(e){function r(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(r){return Promise.all(r.map(function(r,t){return n.put(e[t],r)}))}).then(function(){})})},{}]},{},["/Users/JarviS/Practices/barcode-scanner/app/sw.js"]);
//# sourceMappingURL=sw.js.map
