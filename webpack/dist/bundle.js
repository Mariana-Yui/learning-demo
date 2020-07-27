/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webpack/src/image/wallhaven-vgk59p.jpg":
/*!************************************************!*\
  !*** ./webpack/src/image/wallhaven-vgk59p.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"image/5c47d6f15991c3d8f593140047dfd738.jpg\");\n\n//# sourceURL=webpack:///./webpack/src/image/wallhaven-vgk59p.jpg?");

/***/ }),

/***/ "./webpack/src/js/Avatar.js":
/*!**********************************!*\
  !*** ./webpack/src/js/Avatar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Avatar {\r\n    constructor(imgUrl) {\r\n        const img = new Image();\r\n        img.src = imgUrl;\r\n        this.img = img;\r\n    }\r\n    appendToBody() {\r\n        const root = document.querySelector('body');\r\n        root.append(this.img);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\r\n\n\n//# sourceURL=webpack:///./webpack/src/js/Avatar.js?");

/***/ }),

/***/ "./webpack/src/js/Header.js":
/*!**********************************!*\
  !*** ./webpack/src/js/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Header {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    getName() {\r\n        console.log(this.name);\r\n        return this.name;\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\r\n\n\n//# sourceURL=webpack:///./webpack/src/js/Header.js?");

/***/ }),

/***/ "./webpack/src/js/index.js":
/*!*********************************!*\
  !*** ./webpack/src/js/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./webpack/src/js/Header.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ \"./webpack/src/js/Avatar.js\");\n/* harmony import */ var _image_wallhaven_vgk59p_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/wallhaven-vgk59p.jpg */ \"./webpack/src/image/wallhaven-vgk59p.jpg\");\n\r\n\r\n\r\n\r\nconst header = new _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('denislin');\r\n\r\nconst name = header.getName();\r\n\r\ndocument.write(name);\r\n\r\nconst avatar = new _Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_image_wallhaven_vgk59p_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\navatar.appendToBody();\r\n\n\n//# sourceURL=webpack:///./webpack/src/js/index.js?");

/***/ })

/******/ });