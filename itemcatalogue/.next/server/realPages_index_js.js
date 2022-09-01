"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "realPages_index_js";
exports.ids = ["realPages_index_js"];
exports.modules = {

/***/ "./realPages/index.js":
/*!****************************!*\
  !*** ./realPages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n//import prisma from \"../lib/prisma\";\nconst Home = (props)=>{\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"test2\"\n    }, void 0, false, {\n        fileName: \"/Users/aristosmarkogiannakis/Projects/react-alicante-mfes/itemcatalogue/realPages/index.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, undefined);\n};\nHome.getInitialProps = async (ctx)=>{\n    console.warn(\"server\");\n    // const stores = await prisma.store.findMany();\n    // console.log(stores);\n    let response = await fetch(\"https://reqres.in/api/products/3\");\n    let stores = await response.json();\n    console.warn(stores);\n    return {\n        props: {\n            stores\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFsUGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFGQSxxQ0FBcUM7QUFFckMsTUFBTUEsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBSztJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDRyxLQUFHO2tCQUFDLE9BRUw7Ozs7O2lCQUFNLENBZ0JQO0NBQ0o7QUFFREosSUFBSSxDQUFDSyxlQUFlLEdBQUcsT0FBT0MsR0FBRyxHQUFLO0lBRWxDSixPQUFPLENBQUNLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV2QixnREFBZ0Q7SUFFaEQsdUJBQXVCO0lBR3ZCLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0NBQWtDLENBQUM7SUFDOUQsSUFBSUMsTUFBTSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRWxDVCxPQUFPLENBQUNLLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7SUFFckIsT0FBTztRQUNMVCxLQUFLLEVBQUU7WUFBRVMsTUFBTTtTQUFFO0tBQ2xCLENBQUM7Q0FDSCxDQUFDO0FBRUYsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0ZW1jYXRhbG9ndWUvLi9yZWFsUGFnZXMvaW5kZXguanM/MTI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgdGVzdDJcbiAgICAgIDwvZGl2PlxuICAgICAgLy8gPGRpdj5cbiAgICAgIC8vICAgQ2F0YWxvZ3VlXG4gICAgICAvLyB7XG4gICAgICAvLyAgIHN0b3JlcyAmJiBzdG9yZXMubWFwKGl0ZW0gPT4ge1xuICBcbiAgICAgIC8vICAgICAgIHJldHVybiAoXG4gICAgICAvLyAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgLy8gICAgICAgICAgICAgICA8ZGl2PntpdGVtLmxvY2F0aW9ufTwvZGl2PlxuICAgICAgLy8gICAgICAgICAgICAgICA8ZGl2PntpdGVtLmNyZWF0ZWRBdH08L2Rpdj5cbiAgICAgIC8vICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgIC8vICAgICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgIClcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vIH1cbiAgICAgIC8vIDwvZGl2PlxuICAgIClcbn1cbiAgICBcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXG4gICAgY29uc29sZS53YXJuKCdzZXJ2ZXInKTtcbiAgXG4gICAgLy8gY29uc3Qgc3RvcmVzID0gYXdhaXQgcHJpc21hLnN0b3JlLmZpbmRNYW55KCk7XG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3Jlcyk7XG4gIFxuICBcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3Byb2R1Y3RzLzMnKTtcbiAgICBsZXQgc3RvcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBcbiAgICBjb25zb2xlLndhcm4oc3RvcmVzKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHN0b3JlcyB9XG4gICAgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3YXJuIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0b3JlcyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./realPages/index.js\n");

/***/ })

};
;