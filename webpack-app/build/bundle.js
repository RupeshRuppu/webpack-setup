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

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlertService: () => (/* binding */ AlertService)\n/* harmony export */ });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n\n\nclass AlertService {\n\tconstructor() {\n\t\tthis.errorBox = document.getElementById(\"error\");\n\t}\n\n\thandleAdditionError(inputs, numbers) {\n\t\tconst fullMessage = inputs.reduce((message, str, index) => {\n\t\t\tif ((0,_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__.inputsAreValid)(numbers[index])) {\n\t\t\t\treturn message + \"\";\n\t\t\t} else {\n\t\t\t\treturn message + `${str} is not a number. `;\n\t\t\t}\n\t\t}, \"Please enter two valid numbers! \");\n\n\t\tthis.errorBox.classList.remove(\"invisible\");\n\t\tthis.errorBox.innerText = fullMessage;\n\t}\n\n\thideErrors() {\n\t\tthis.errorBox.classList.add(\"invisible\");\n\t}\n}\n\n\n//# sourceURL=webpack://webpack-app/./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   run: () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n/* harmony import */ var _utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parse-inputs */ \"./src/app/utils/parse-inputs.js\");\n\n\n\nconst run = (alertService, componentService) => {\n\talertService.hideErrors();\n\n\tcomponentService.onClick(() => {\n\t\talertService.hideErrors();\n\t\tconst inputs = componentService.getInputs();\n\t\tconst parsedInputs = (0,_utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__.parseInputs)(...inputs);\n\t\tif ((0,_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__.inputsAreValid)(...parsedInputs)) {\n\t\t\tconst [numA, numB] = parsedInputs;\n\t\t\tcomponentService.setResult(numA + numB);\n\t\t} else {\n\t\t\tcomponentService.setResult(\"\");\n\t\t\talertService.handleAdditionError(inputs, parsedInputs);\n\t\t}\n\t});\n};\n\n\n//# sourceURL=webpack://webpack-app/./src/app/app.js?");

/***/ }),

/***/ "./src/app/component.service.js":
/*!**************************************!*\
  !*** ./src/app/component.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComponentService: () => (/* binding */ ComponentService)\n/* harmony export */ });\nclass ComponentService {\n\tconstructor() {\n\t\tthis.numberOneInput = document.getElementById(\"numberOne\");\n\t\tthis.numberTwoInput = document.getElementById(\"numberTwo\");\n\t\tthis.addValuesButton = document.getElementById(\"addValues\");\n\t\tthis.resultDiv = document.getElementById(\"result\");\n\t}\n\n\tgetInputs() {\n\t\treturn [this.numberOneInput.value, this.numberTwoInput.value];\n\t}\n\n\tsetResult(str) {\n\t\tthis.resultDiv.innerText = str;\n\t}\n\n\tonClick(cb) {\n\t\tthis.addValuesButton.addEventListener(\"click\", cb);\n\t}\n}\n\n\n//# sourceURL=webpack://webpack-app/./src/app/component.service.js?");

/***/ }),

/***/ "./src/app/utils/inputs-are-valid.js":
/*!*******************************************!*\
  !*** ./src/app/utils/inputs-are-valid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputsAreValid: () => (/* binding */ inputsAreValid)\n/* harmony export */ });\nconst inputsAreValid = (...input) => {\n\treturn input.every(num => typeof num === \"number\" && !isNaN(num));\n};\n\n\n//# sourceURL=webpack://webpack-app/./src/app/utils/inputs-are-valid.js?");

/***/ }),

/***/ "./src/app/utils/parse-inputs.js":
/*!***************************************!*\
  !*** ./src/app/utils/parse-inputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseInputs: () => (/* binding */ parseInputs)\n/* harmony export */ });\nconst parseInputs = (...input) => {\n\treturn input.map(str => parseInt(str));\n};\n\n\n//# sourceURL=webpack://webpack-app/./src/app/utils/parse-inputs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/alert.service */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/component.service */ \"./src/app/component.service.js\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\n\n\n\nconst alertService = new _app_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService();\nconst componentService = new _app_component_service__WEBPACK_IMPORTED_MODULE_1__.ComponentService();\n\n(0,_app_app__WEBPACK_IMPORTED_MODULE_2__.run)(alertService, componentService);\n\n\n//# sourceURL=webpack://webpack-app/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;