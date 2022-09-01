"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQyxNQUFNO0FBRVYsSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sRUFBRTtRQUNsQkUsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSUQsd0RBQVksRUFBRSxDQUFDO0tBQ3BDO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNLENBQUM7Q0FDeEI7QUFFRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRlbWNhdGFsb2d1ZS8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.js\");\n\n\nconst Home = ({ stores  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Catalogue\",\n            stores && stores.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.location\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, undefined);\n};\nconst getStaticProps = async ()=>{\n    console.warn(\"server\");\n    const stores = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].store.findMany();\n    console.log(stores);\n    // let response = await fetch('https://reqres.in/api/products/3');\n    // let stores = await response.json();\n    return {\n        props: {\n            stores\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1DO0FBRW5DLE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLE1BQU0sR0FBQyxHQUFLO0lBQ3ZCLHFCQUNFLDhEQUFDQyxLQUFHOztZQUFDLFdBRUw7WUFDRUQsTUFBTSxJQUFJQSxNQUFNLENBQUNFLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJO2dCQUV6QixxQkFDSSw4REFBQ0YsS0FBRzs7c0NBQ0EsOERBQUNBLEtBQUc7c0NBQUVFLElBQUksQ0FBQ0MsUUFBUTs7Ozs7cUNBQU87c0NBQzFCLDhEQUFDSCxLQUFHO3NDQUFFRSxJQUFJLENBQUNFLFNBQVM7Ozs7O3FDQUFPO3NDQUMzQiw4REFBQ0osS0FBRztzQ0FBRUUsSUFBSSxDQUFDRyxLQUFLOzs7OztxQ0FBTzs7bUJBSGpCSCxJQUFJLENBQUNJLEVBQUU7Ozs7NkJBSVgsQ0FDVDthQUNKLENBQUM7Ozs7OztpQkFFRSxDQUNQO0NBQ0o7QUFFTSxNQUFNQyxjQUFjLEdBQUcsVUFBWTtJQUV0Q0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdkIsTUFBTVYsTUFBTSxHQUFHLE1BQU1GLGtFQUFxQixFQUFFO0lBRTVDVyxPQUFPLENBQUNJLEdBQUcsQ0FBQ2IsTUFBTSxDQUFDLENBQUM7SUFFcEIsa0VBQWtFO0lBQ2xFLHNDQUFzQztJQUV0QyxPQUFPO1FBQ0xjLEtBQUssRUFBRTtZQUFFZCxNQUFNO1NBQUU7S0FDbEIsQ0FBQztDQUNILENBQUM7QUFFRixpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRlbWNhdGFsb2d1ZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xuXG5jb25zdCBIb21lID0gKHtzdG9yZXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIENhdGFsb2d1ZVxuICAgICAge1xuICAgICAgICBzdG9yZXMgJiYgc3RvcmVzLm1hcChpdGVtID0+IHtcbiAgXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5sb2NhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5jcmVhdGVkQXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG4gICAgXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zb2xlLndhcm4oJ3NlcnZlcicpO1xuICBcbiAgICBjb25zdCBzdG9yZXMgPSBhd2FpdCBwcmlzbWEuc3RvcmUuZmluZE1hbnkoKTtcbiAgXG4gICAgY29uc29sZS5sb2coc3RvcmVzKTtcbiAgXG4gICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS9wcm9kdWN0cy8zJyk7XG4gICAgLy8gbGV0IHN0b3JlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHN0b3JlcyB9XG4gICAgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInByaXNtYSIsIkhvbWUiLCJzdG9yZXMiLCJkaXYiLCJtYXAiLCJpdGVtIiwibG9jYXRpb24iLCJjcmVhdGVkQXQiLCJ0aXRsZSIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJjb25zb2xlIiwid2FybiIsInN0b3JlIiwiZmluZE1hbnkiLCJsb2ciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();