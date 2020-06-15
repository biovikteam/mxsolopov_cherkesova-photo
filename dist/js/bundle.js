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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/includes/hero.js":
/*!*********************************!*\
  !*** ./src/js/includes/hero.js ***!
  \*********************************/
/*! exports provided: heroSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heroSection\", function() { return heroSection; });\nvar heroSection = function () {\n  // 'use strict';\n  var heroImgWrap = document.querySelector('.hero__img-wrap'),\n      heroImg = document.querySelectorAll('.hero__img'),\n      windowWidth = window.innerWidth;\n\n  function heroTouch(actionOn, actionOff) {\n    heroImgWrap.addEventListener(actionOn, function () {\n      heroImg.forEach(function (item, i) {\n        heroImg[i].style.transform = 'translateY(0)';\n      });\n    });\n    heroImgWrap.addEventListener(actionOff, function () {\n      for (var i = 1; i <= heroImg.length; i++) {\n        if (i % 2 == 0) {\n          heroImg[i - 1].style.transform = 'translateY(6%)';\n        } else {\n          heroImg[i - 1].style.transform = 'translateY(-6%)';\n        }\n      }\n    });\n  }\n\n  if (windowWidth < 1024) {\n    heroTouch('touchstart', 'touchend');\n  }\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5jbHVkZXMvaGVyby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9pbmNsdWRlcy9oZXJvLmpzPzQ1ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBoZXJvU2VjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gJ3VzZSBzdHJpY3QnO1xuICB2YXIgaGVyb0ltZ1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19faW1nLXdyYXAnKSxcbiAgICAgIGhlcm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVyb19faW1nJyksXG4gICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIGZ1bmN0aW9uIGhlcm9Ub3VjaChhY3Rpb25PbiwgYWN0aW9uT2ZmKSB7XG4gICAgaGVyb0ltZ1dyYXAuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb25PbiwgZnVuY3Rpb24gKCkge1xuICAgICAgaGVyb0ltZy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIGhlcm9JbWdbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaGVyb0ltZ1dyYXAuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb25PZmYsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGhlcm9JbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgICAgICBoZXJvSW1nW2kgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSg2JSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlcm9JbWdbaSAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC02JSknO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAod2luZG93V2lkdGggPCAxMDI0KSB7XG4gICAgaGVyb1RvdWNoKCd0b3VjaHN0YXJ0JywgJ3RvdWNoZW5kJyk7XG4gIH1cbn0oKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/includes/hero.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _includes_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes/hero */ \"./src/js/includes/hero.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZXJvU2VjdGlvbiB9IGZyb20gJy4vaW5jbHVkZXMvaGVybyc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8zYjQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map