/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@module-federation/nextjs-ssr/lib/noop.js":
/*!****************************************************************!*\
  !*** ./node_modules/@module-federation/nextjs-ssr/lib/noop.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL25leHRqcy1zc3IvbGliL25vb3AuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdGVtY2F0YWxvZ3VlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9uZXh0anMtc3NyL2xpYi9ub29wLmpzPzhlN2IiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@module-federation/nextjs-ssr/lib/noop.js\n");

/***/ }),

/***/ "webpack/container/entry/itemcatalogue":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	"./items": () => {
		return __webpack_require__.e("components_items_jsx").then(() => (() => ((__webpack_require__(/*! ./components/items.jsx */ "./components/items.jsx")))));
	},
	"./home": () => {
		return __webpack_require__.e("pages_index_js").then(() => (() => ((__webpack_require__(/*! ./pages/index */ "./pages/index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init), chunkMap: () => ({"sharedModules":[],"federatedModules":[{"remote":"itemcatalogue","entry":"static/chunks/remoteEntry.js","sharedModules":[],"exposes":{"./items":[{"chunks":["static/chunks/components_items_jsx-fed.js"],"sharedModules":[]}],"./home":[{"chunks":["static/chunks/pages_index_js-fed.js"],"sharedModules":[]}]},"remoteModules":{}}],"loadable":{}}), hash: ()=>("1d27c4997ead09816d57660c641282e9")
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/types");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-fed.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "itemcatalogue";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@module-federation/nextjs-ssr/lib/noop.js", "0.2.0-rc.2", () => (() => (__webpack_require__(/*! ./node_modules/@module-federation/nextjs-ssr/lib/noop.js */ "./node_modules/@module-federation/nextjs-ssr/lib/noop.js"))), 1);
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"itemcatalogue": 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(async function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							var fs = require('fs');
/******/ 							if(fs.existsSync(filename)) {
/******/ 								console.log(filename,"exists locally")
/******/ 								fs.readFile(filename, 'utf-8', function(err, content) {
/******/ 									if(err) return reject(err);
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							} else {
/******/ 		
/******/ 								    function loadScript() {
/******/ 								        var url;
/******/ 								        var cb = arguments[arguments.length - 1];
/******/ 								        if (typeof cb !== "function") {
/******/ 								            throw new Error("last argument should be a function");
/******/ 								        }
/******/ 								        if (arguments.length === 2) {
/******/ 								            url = arguments[0];
/******/ 								        } else if (arguments.length === 3) {
/******/ 								            url = new URL(arguments[1], arguments[0]).toString();
/******/ 								        } else {
/******/ 								            throw new Error("invalid number of arguments");
/******/ 								        }
/******/ 								      if(global.webpackChunkLoad){
/******/ 								        global.webpackChunkLoad(url).then(function(resp){
/******/ 								          return resp.text();
/******/ 								        }).then(function(rawData){
/******/ 								          cb(null, rawData);
/******/ 								        }).catch(function(err){
/******/ 								          console.error('Federated Chunk load failed', error);
/******/ 								          return cb(error)
/******/ 								        });
/******/ 								      } else {
/******/ 								        //TODO https support
/******/ 								        let request = (url.startsWith('https') ? require('https') : require('http')).get(url, function (resp) {
/******/ 								          if (resp.statusCode === 200) {
/******/ 								            let rawData = '';
/******/ 								            resp.setEncoding('utf8');
/******/ 								            resp.on('data', chunk => {
/******/ 								              rawData += chunk;
/******/ 								            });
/******/ 								            resp.on('end', () => {
/******/ 								              cb(null, rawData);
/******/ 								            });
/******/ 								          } else {
/******/ 								            cb(resp);
/******/ 								          }
/******/ 								        });
/******/ 								        request.on('error', error => {
/******/ 								          console.error('Federated Chunk load failed', error);
/******/ 								          return cb(error)
/******/ 								        });
/******/ 								      }
/******/ 								    }
/******/ 								console.log('needs to load remote script');
/******/ 								console.log('before remote var creation')
/******/ 								console.log('before remote var creation', {"home":"home@http://localhost:3001/_next/static/ssr/remoteEntry.js"})
/******/ 								var remotes = {"home":"home@http://localhost:3001/_next/static/ssr/remoteEntry.js"};
/******/ 								console.log('remotes in chunk load',remotes)
/******/ 								console.log('global.REMOTE_CONFIG',global.REMOTE_CONFIG)
/******/ 								if(global.REMOTE_CONFIG && !global.REMOTE_CONFIG["itemcatalogue"]) {
/******/ 								                            if(global.loadedRemotes){
/******/ 								                              for (const property in global.loadedRemotes) {
/******/ 								                                global.REMOTE_CONFIG[property] = global.loadedRemotes[property].path
/******/ 								                              }
/******/ 								                            }
/******/ 									Object.assign(global.REMOTE_CONFIG, remotes)
/******/ 								}
/******/ 								var requestedRemote = global.REMOTE_CONFIG["itemcatalogue"]
/******/ 								if(typeof requestedRemote === 'function'){
/******/ 								                              requestedRemote = await requestedRemote()
/******/ 								                            }
/******/ 								console.log('requestedRemote',requestedRemote);
/******/ 								var scriptUrl = new URL(requestedRemote.split("@")[1]);
/******/ 								var chunkName = __webpack_require__.u(chunkId);
/******/ 								console.log('remotes global',global.REMOTE_CONFIG);
/******/ 								console.log('chunkname to request',chunkName);
/******/ 								var fileToReplace = require('path').basename(scriptUrl.pathname);
/******/ 								scriptUrl.pathname = scriptUrl.pathname.replace(fileToReplace, chunkName);
/******/ 								console.log('will load remote chunk', scriptUrl.toString());
/******/ 								loadScript(scriptUrl.toString(), function(err, content) {
/******/ 									if(err) {console.error('error loading remote chunk', scriptUrl.toString(),'got',content); return reject(err);}
/******/ 									var chunk = {};
/******/ 									require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 									installChunk(chunk);
/******/ 								});
/******/ 							}
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/itemcatalogue");
/******/ 	exports.itemcatalogue = __webpack_exports__;
/******/ 	
/******/ })()
;