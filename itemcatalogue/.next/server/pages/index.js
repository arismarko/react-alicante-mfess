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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.js\");\n\n\nfunction Home({ stores  }) {\n    console.log(stores);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Catalogue\",\n            stores && stores.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.location\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 15\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\nconst getStaticProps = async ()=>{\n    console.log(_lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const stores = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].store.findMany();\n    console.log(stores);\n    return {\n        props: {\n            stores\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1DO0FBRXBCLFNBQVNDLElBQUksQ0FBQyxFQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUN2Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNFLDhEQUFDRyxLQUFHOztZQUFDLFdBRUw7WUFDRUgsTUFBTSxJQUFJQSxNQUFNLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJO2dCQUV6QixxQkFDSSw4REFBQ0YsS0FBRzs7c0NBQ0EsOERBQUNBLEtBQUc7c0NBQUVFLElBQUksQ0FBQ0MsUUFBUTs7Ozs7Z0NBQU87c0NBQzFCLDhEQUFDSCxLQUFHO3NDQUFFRSxJQUFJLENBQUNFLFNBQVM7Ozs7O2dDQUFPO3NDQUMzQiw4REFBQ0osS0FBRztzQ0FBRUUsSUFBSSxDQUFDRyxLQUFLOzs7OztnQ0FBTzs7bUJBSGpCSCxJQUFJLENBQUNJLEVBQUU7Ozs7d0JBSVgsQ0FDVDthQUNKLENBQUM7Ozs7OztZQUVFLENBQ1A7Q0FDRjtBQUVNLE1BQU1DLGNBQWMsR0FBRyxVQUFZO0lBRXhDVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osbURBQU0sQ0FBQyxDQUFDO0lBRXBCLE1BQU1FLE1BQU0sR0FBRyxNQUFNRixrRUFBcUIsRUFBRTtJQUU1Q0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLE9BQU87UUFDTGEsS0FBSyxFQUFFO1lBQUViLE1BQU07U0FBRTtLQUNsQixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0ZW1jYXRhbG9ndWUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHN0b3JlcyB9KSB7XG4gIGNvbnNvbGUubG9nKHN0b3Jlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIENhdGFsb2d1ZVxuICAgIHtcbiAgICAgIHN0b3JlcyAmJiBzdG9yZXMubWFwKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5sb2NhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uY3JlYXRlZEF0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKHByaXNtYSk7XG5cbiAgY29uc3Qgc3RvcmVzID0gYXdhaXQgcHJpc21hLnN0b3JlLmZpbmRNYW55KCk7XG5cbiAgY29uc29sZS5sb2coc3RvcmVzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHN0b3JlcyB9XG4gIH07XG59OyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJIb21lIiwic3RvcmVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsIml0ZW0iLCJsb2NhdGlvbiIsImNyZWF0ZWRBdCIsInRpdGxlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsInN0b3JlIiwiZmluZE1hbnkiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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