"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var stores = param.stores;\n    var _this = this;\n    console.log(stores);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: stores && stores.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.location\n                    }, void 0, false, {\n                        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 19\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.createdAt\n                    }, void 0, false, {\n                        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 19\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 19\n                    }, _this)\n                ]\n            }, item.id, true, {\n                fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 15\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRWUsU0FBU0EsSUFBSSxDQUFDLEtBQVUsRUFBRTtRQUFaLE1BQVEsR0FBUixLQUFVLENBQVJDLE1BQU07O0lBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7SUFDcEIscUJBQ0UsOERBQUNHLEtBQUc7a0JBRUZILE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTtZQUV6QixxQkFDSSw4REFBQ0YsS0FBRzs7a0NBQ0EsOERBQUNBLEtBQUc7a0NBQUVFLElBQUksQ0FBQ0MsUUFBUTs7Ozs7NkJBQU87a0NBQzFCLDhEQUFDSCxLQUFHO2tDQUFFRSxJQUFJLENBQUNFLFNBQVM7Ozs7OzZCQUFPO2tDQUMzQiw4REFBQ0osS0FBRztrQ0FBRUUsSUFBSSxDQUFDRyxLQUFLOzs7Ozs2QkFBTzs7ZUFIakJILElBQUksQ0FBQ0ksRUFBRTs7OztxQkFJWCxDQUNUO1NBQ0osQ0FBQzs7Ozs7WUFFRSxDQUNQO0NBQ0Y7QUFsQnVCVixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3RvcmVzIH0pIHtcbiAgY29uc29sZS5sb2coc3RvcmVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtcbiAgICAgIHN0b3JlcyAmJiBzdG9yZXMubWFwKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5sb2NhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uY3JlYXRlZEF0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKHByaXNtYSk7XG5cbiAgY29uc3Qgc3RvcmVzID0gYXdhaXQgcHJpc21hLnN0b3JlLmZpbmRNYW55KCk7XG5cbiAgY29uc29sZS5sb2coc3RvcmVzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHN0b3JlcyB9XG4gIH07XG59OyJdLCJuYW1lcyI6WyJIb21lIiwic3RvcmVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsIml0ZW0iLCJsb2NhdGlvbiIsImNyZWF0ZWRBdCIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});