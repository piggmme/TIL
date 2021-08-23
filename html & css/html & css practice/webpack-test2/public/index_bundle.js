/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/helper.js":
/*!**************************!*\
  !*** ./source/helper.js ***!
  \**************************/
/***/ (() => {

eval("/* -----------------------------------------------------\n * DOM 선택 헬퍼 함수 */\n\nfunction els(selector, context) {\n  if (typeof selector !== \"string\" || selector.trim().length === 0) {\n    return null;\n  }\n  context = !context\n    ? document\n    : context.nodeType === 1\n    ? context\n    : el(String(context));\n  return context.querySelectorAll(selector);\n}\n\nfunction el(selector, context) {\n  if (typeof selector !== \"string\" || selector.trim().length === 0) {\n    return null;\n  }\n  context = !context\n    ? document\n    : context.nodeType === 1\n    ? context\n    : el(String(context));\n  return context.querySelector(selector);\n}\n\n\n//# sourceURL=webpack://webpack-test2/./source/helper.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './build/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './build/animation.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./source/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_1__);\n// -----------------------------------------------------------------------------------------\n// 인터랙션 UI 디자인 - OffCanvas 메뉴 / Toggle 패널\n// - DOM API, 변수, 함수, 조건문, 반복문, 연산자 등을 활용하는 총체적 예제.\n//\n// [1.1] EDIYA COFFEE 로고 오른쪽 옆에 위치한 토글 버튼(.button-open-menu)을 누르면,\n//       오프캔버스 메뉴(.navigation)을 화면에 표시한다.\n//       - hidden 속성 값 false 설정.\n//       - is-active 클래스 추가.\n//\n// [1.2] 오프캔버스 닫기 버튼(.button-close-menu)을 누르면,\n//       오프캔버스 메뉴(.navigation)을 화면에서 감춘다.\n//       - hidden 속성 값 true 설정.\n//       - is-active 클래스 제거.\n//\n// [2.1] 이디야 메뉴 아이템(.ediya-menu__item)을 문서에서 모두 수집한 후,\n//       메뉴 아이템 내부에서 a 요소를 찾아 클릭 이벤트를 연결한다.\n//       이벤트에 연결된 함수(핸들러)는 음료 상세 설명 패널을 화면에 표시한다.\n//       - 상세 설명 패널(.ediya-menu__item--detail) hidden 속성 값 false 설정.\n//       - 상세 설명 패널에 is-active 클래스 추가.\n//\n// [2.2] 상세 설명 패널 내부에 위치한 패널 닫기 버튼(.button-close-panel)을 클릭하면,\n//       패널을 닫는 이벤트 핸들러를 연결하여 패널을 닫도록 설정한다.\n//       - 상세 설명 패널(.ediya-menu__item--detail) hidden 속성 값 true 설정.\n//       - 상세 설명 패널에 is-active 클래스 제거.\n//\n//\n// 예제 참고 URL: ediya.com/contents/drink.html\n// ------------------------------------------------------------------------------------------\n\n\n\n\n\nvar app_header = null;\nvar menu_open_btn = null;\nvar app_navigation = null;\nvar menu_close_btn = null;\nvar app_main = null;\nvar ediya_menu = null;\nvar menu_items = null;\n\n// 초기화\nfunction init() {\n  // 문서 객체 접근 참조\n  accessingDOMElements();\n  // 오프캔버스 메뉴 접근성\n  a11yOffCanvasMenu(app_navigation);\n  // 이벤트 바인딩\n  bindEvents();\n}\n\nfunction accessingDOMElements() {\n  app_header = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".header\");\n  menu_open_btn = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".button-open-menu\", app_header);\n  app_navigation = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".navigation\", app_header);\n  menu_close_btn = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".button-close-menu\", app_navigation);\n  app_main = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".main\");\n  ediya_menu = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".ediya-menu\");\n  menu_items = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.els)(\".ediya-menu__item\", ediya_menu);\n}\n\nfunction bindEvents() {\n  for (var i = 0, l = menu_items.length; i < l; ++i) {\n    var menu_item = menu_items[i];\n    var link = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\"a\", menu_item);\n    var close_panel_btn = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".button-close-panel\", menu_item);\n    link.addEventListener(\"click\", openDetailPanel.bind(link, i));\n    close_panel_btn.addEventListener(\"click\", closeDetailPanel);\n  }\n\n  menu_open_btn.addEventListener(\"click\", openNavMenu);\n  menu_close_btn.addEventListener(\"click\", closeNavMenu);\n}\n\nfunction openNavMenu() {\n  app_navigation.hidden = false;\n  window.setTimeout(function () {\n    app_navigation.classList.add(\"is-active\");\n  }, 10);\n}\n\nfunction closeNavMenu() {\n  app_navigation.classList.remove(\"is-active\");\n  window.setTimeout(function () {\n    app_navigation.hidden = true;\n  }, 600);\n}\n\nfunction openDetailPanel(index, e) {\n  e.preventDefault();\n  var detail = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.el)(\".ediya-menu__item--detail\", menu_items[index]);\n  detail.hidden = false;\n  window.setTimeout(function () {\n    detail.classList.add(\"is-active\");\n  }, 10);\n}\n\nfunction closeDetailPanel() {\n  var parent = this.parentNode;\n  parent.classList.remove(\"is-active\");\n  window.setTimeout(function () {\n    parent.hidden = true;\n  }, 600);\n}\n\ninit();\n\n// -----------------------------------------------------------------\n// 오프캔버스 메뉴 접근성\n// -----------------------------------------------------------------\nfunction a11yOffCanvasMenu(app_navigation) {\n  var nav_focusables = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.els)(\"a, button\", app_navigation);\n  var nav_focusable_first = nav_focusables[0];\n  var nav_focusable_last = nav_focusables[nav_focusables.length - 1];\n\n  window.addEventListener(\"keyup\", escCloseMenu);\n  nav_focusable_first.addEventListener(\"keydown\", navLastFocus);\n  nav_focusable_last.addEventListener(\"keydown\", navFirstFocus);\n\n  function escCloseMenu(e) {\n    if (e.keyCode === 27) {\n      closeNavMenu();\n    }\n  }\n\n  function navFirstFocus(e) {\n    if (!e.shiftKey && e.keyCode === 9) {\n      window.setTimeout(function () {\n        nav_focusable_first.focus();\n      }, 10);\n    }\n  }\n\n  function navLastFocus(e) {\n    if (document.activeElement === e.target && e.shiftKey && e.keyCode === 9) {\n      nav_focusable_last.removeEventListener(\"keydown\", navFirstFocus);\n      window.setTimeout(function () {\n        nav_focusable_last.focus();\n        nav_focusable_last.addEventListener(\"keydown\", navFirstFocus);\n      }, 10);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://webpack-test2/./source/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/index.js");
/******/ 	
/******/ })()
;