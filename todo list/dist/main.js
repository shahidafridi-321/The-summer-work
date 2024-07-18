/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functionAddItems.js":
/*!*********************************!*\
  !*** ./src/functionAddItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItems: () => (/* binding */ addItems)\n/* harmony export */ });\n/* harmony import */ var _renderFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderFunction */ \"./src/renderFunction.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\nfunction addItems() {\n  let inputData = document.querySelector('.js-input');\n  let inputDate = document.querySelector('.js-select-date');\n  if (inputData.value && inputDate.value) {\n    _index__WEBPACK_IMPORTED_MODULE_1__.list.push({ name: inputData.value, dueDate: inputDate.value });\n    (0,_renderFunction__WEBPACK_IMPORTED_MODULE_0__.renderList)(_index__WEBPACK_IMPORTED_MODULE_1__.list);\n    inputData.value = '';\n    inputDate.value = '';\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/functionAddItems.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   list: () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var _renderFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderFunction */ \"./src/renderFunction.js\");\n/* harmony import */ var _functionAddItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionAddItems */ \"./src/functionAddItems.js\");\n\n\n\n\nlet list = [{name:'khan',dueDate:'12/03/2000'}];\nlet addBtn = document.querySelector('.add-item');\naddBtn.addEventListener('click', _functionAddItems__WEBPACK_IMPORTED_MODULE_1__.addItems);\n\n\n(0,_renderFunction__WEBPACK_IMPORTED_MODULE_0__.renderList)(list);\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/renderFunction.js":
/*!*******************************!*\
  !*** ./src/renderFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderList: () => (/* binding */ renderList)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nfunction renderList(ar) {\n  let container = document.querySelector('.js-todo-list');\n  let HTML = '';\n  ar.forEach((element,index) => {\n    HTML += `\n    <p>${element.name} ${element.dueDate}</p>\n    <button class='delete-btn'>Delete</button>\n    <br>`;\n  });\n  container.innerHTML = HTML;\n  \n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderFunction.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;