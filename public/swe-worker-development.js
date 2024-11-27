/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nself.onmessage = async (e)=>{\n    switch(e.data.type){\n        case \"__START_URL_CACHE__\":\n            {\n                let t = e.data.url, a = await fetch(t);\n                if (!a.redirected) return (await caches.open(\"start-url\")).put(t, a);\n                return Promise.resolve();\n            }\n        case \"__FRONTEND_NAV_CACHE__\":\n            {\n                let t = e.data.url, a = await caches.open(\"pages\");\n                if (await a.match(t, {\n                    ignoreSearch: !0\n                })) return;\n                let s = await fetch(t);\n                if (!s.ok) return;\n                if (a.put(t, s.clone()), e.data.shouldCacheAggressively && s.headers.get(\"Content-Type\")?.includes(\"text/html\")) try {\n                    let e = await s.text(), t = [], a = await caches.open(\"static-style-assets\"), r = await caches.open(\"next-static-js-assets\"), c = await caches.open(\"static-js-assets\");\n                    for (let [s, r] of e.matchAll(/<link.*?href=['\"](.*?)['\"].*?>/g))/rel=['\"]stylesheet['\"]/.test(s) && t.push(a.match(r).then((e)=>e ? Promise.resolve() : a.add(r)));\n                    for (let [, a] of e.matchAll(/<script.*?src=['\"](.*?)['\"].*?>/g)){\n                        let e = /\\/_next\\/static.+\\.js$/i.test(a) ? r : c;\n                        t.push(e.match(a).then((t)=>t ? Promise.resolve() : e.add(a)));\n                    }\n                    return await Promise.all(t);\n                } catch  {}\n                return Promise.resolve();\n            }\n        default:\n            return Promise.resolve();\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGR1Y2FuaDI5MTIvbmV4dC1wd2EvZGlzdC9zdy1lbnRyeS13b3JrZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiRDpcXHdlYmRldlxcSGVhcmVhc2VcXG5vZGVfbW9kdWxlc1xcQGR1Y2FuaDI5MTJcXG5leHQtcHdhXFxkaXN0XFxzdy1lbnRyeS13b3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsic2VsZi5vbm1lc3NhZ2UgPSBhc3luYyAoZSk9PntcbiAgICBzd2l0Y2goZS5kYXRhLnR5cGUpe1xuICAgICAgICBjYXNlIFwiX19TVEFSVF9VUkxfQ0FDSEVfX1wiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0ID0gZS5kYXRhLnVybCwgYSA9IGF3YWl0IGZldGNoKHQpO1xuICAgICAgICAgICAgICAgIGlmICghYS5yZWRpcmVjdGVkKSByZXR1cm4gKGF3YWl0IGNhY2hlcy5vcGVuKFwic3RhcnQtdXJsXCIpKS5wdXQodCwgYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFwiX19GUk9OVEVORF9OQVZfQ0FDSEVfX1wiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0ID0gZS5kYXRhLnVybCwgYSA9IGF3YWl0IGNhY2hlcy5vcGVuKFwicGFnZXNcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF3YWl0IGEubWF0Y2godCwge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVTZWFyY2g6ICEwXG4gICAgICAgICAgICAgICAgfSkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGF3YWl0IGZldGNoKHQpO1xuICAgICAgICAgICAgICAgIGlmICghcy5vaykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChhLnB1dCh0LCBzLmNsb25lKCkpLCBlLmRhdGEuc2hvdWxkQ2FjaGVBZ2dyZXNzaXZlbHkgJiYgcy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8uaW5jbHVkZXMoXCJ0ZXh0L2h0bWxcIikpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlID0gYXdhaXQgcy50ZXh0KCksIHQgPSBbXSwgYSA9IGF3YWl0IGNhY2hlcy5vcGVuKFwic3RhdGljLXN0eWxlLWFzc2V0c1wiKSwgciA9IGF3YWl0IGNhY2hlcy5vcGVuKFwibmV4dC1zdGF0aWMtanMtYXNzZXRzXCIpLCBjID0gYXdhaXQgY2FjaGVzLm9wZW4oXCJzdGF0aWMtanMtYXNzZXRzXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBbcywgcl0gb2YgZS5tYXRjaEFsbCgvPGxpbmsuKj9ocmVmPVsnXCJdKC4qPylbJ1wiXS4qPz4vZykpL3JlbD1bJ1wiXXN0eWxlc2hlZXRbJ1wiXS8udGVzdChzKSAmJiB0LnB1c2goYS5tYXRjaChyKS50aGVuKChlKT0+ZSA/IFByb21pc2UucmVzb2x2ZSgpIDogYS5hZGQocikpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgWywgYV0gb2YgZS5tYXRjaEFsbCgvPHNjcmlwdC4qP3NyYz1bJ1wiXSguKj8pWydcIl0uKj8+L2cpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlID0gL1xcL19uZXh0XFwvc3RhdGljLitcXC5qcyQvaS50ZXN0KGEpID8gciA6IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goZS5tYXRjaChhKS50aGVuKCh0KT0+dCA/IFByb21pc2UucmVzb2x2ZSgpIDogZS5hZGQoYSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwodCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge31cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/@ducanh2912/next-pwa/dist/sw-entry-worker.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;