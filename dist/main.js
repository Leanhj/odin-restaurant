/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector("#content");
const title = document.createElement("div");
const schedule = document.createElement("div");
const location = document.createElement("div");

title.classList = "title";
schedule.classList = "schedule";
location.classList = "location";

title.textContent = "The Stardrop Saloon";
schedule.textContent = "12:00pm to 12:00am";
location.textContent = "Center of Pelican Town";

function renderHome() {
    content.replaceChildren();
    content.appendChild(title);
    content.appendChild(schedule);
    content.appendChild(location);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector("#content");
const permanentDiv = document.createElement("div");
const rotatingDiv = document.createElement("div");

let perNames = ["Beer", "Salad", "Bread", "Spaghetti", "Pizza", "Coffee"];
let perPrices = [400, 220, 120, 240, 600, 300];
for (let i = 0; i < perNames.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemName.textContent = perNames[i];
    itemPrice.textContent = perPrices[i];

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);

    permanentDiv.appendChild(itemDiv);
}

function renderMenu() {
    content.replaceChildren();
    content.appendChild(permanentDiv);
    content.appendChild(rotatingDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

/***/ }),

/***/ "./src/recipes.js":
/*!************************!*\
  !*** ./src/recipes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector("#content");
const recipesDiv = document.createElement("div");

let names = ["Hashbrowns", "Omelet", "Pancakes", "Bread", "Tortilla", "Pizza", "Maki Roll", 
            "Triple Shot Espresso", "Cookie"];
let prices = [50, 100, 100, 100, 100, 150, 300, 5000, 300];
for (let i = 0; i < names.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemName.textContent = names[i];
    itemPrice.textContent = prices[i];

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);

    recipesDiv.appendChild(itemDiv);
}

function renderRecipes() {
    content.replaceChildren();
    content.appendChild(recipesDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderRecipes);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes */ "./src/recipes.js");




(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

const buttonHome = document.querySelector(".home");
const buttonMenu = document.querySelector(".menu");
const buttonRecipes = document.querySelector(".recipes");

buttonHome.addEventListener("click", () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

buttonMenu.addEventListener("click", () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

buttonRecipes.addEventListener("click", () => {
    (0,_recipes__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDcEJ6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMxQnpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7O1VDekI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDQTtBQUNNOztBQUV0QyxpREFBVTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLElBQUksaURBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxudGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuc2NoZWR1bGUuY2xhc3NMaXN0ID0gXCJzY2hlZHVsZVwiO1xubG9jYXRpb24uY2xhc3NMaXN0ID0gXCJsb2NhdGlvblwiO1xuXG50aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIFN0YXJkcm9wIFNhbG9vblwiO1xuc2NoZWR1bGUudGV4dENvbnRlbnQgPSBcIjEyOjAwcG0gdG8gMTI6MDBhbVwiO1xubG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkNlbnRlciBvZiBQZWxpY2FuIFRvd25cIjtcblxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBwZXJtYW5lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgcm90YXRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sZXQgcGVyTmFtZXMgPSBbXCJCZWVyXCIsIFwiU2FsYWRcIiwgXCJCcmVhZFwiLCBcIlNwYWdoZXR0aVwiLCBcIlBpenphXCIsIFwiQ29mZmVlXCJdO1xubGV0IHBlclByaWNlcyA9IFs0MDAsIDIyMCwgMTIwLCAyNDAsIDYwMCwgMzAwXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgcGVyTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gcGVyTmFtZXNbaV07XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcGVyUHJpY2VzW2ldO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgcGVybWFuZW50RGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwZXJtYW5lbnREaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocm90YXRpbmdEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCByZWNpcGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxubGV0IG5hbWVzID0gW1wiSGFzaGJyb3duc1wiLCBcIk9tZWxldFwiLCBcIlBhbmNha2VzXCIsIFwiQnJlYWRcIiwgXCJUb3J0aWxsYVwiLCBcIlBpenphXCIsIFwiTWFraSBSb2xsXCIsIFxuICAgICAgICAgICAgXCJUcmlwbGUgU2hvdCBFc3ByZXNzb1wiLCBcIkNvb2tpZVwiXTtcbmxldCBwcmljZXMgPSBbNTAsIDEwMCwgMTAwLCAxMDAsIDEwMCwgMTUwLCAzMDAsIDUwMDAsIDMwMF07XG5mb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWVzW2ldO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlc1tpXTtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIHJlY2lwZXNEaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclJlY2lwZXMoKSB7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlY2lwZXNEaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJSZWNpcGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHJlbmRlclJlY2lwZXMgZnJvbSBcIi4vcmVjaXBlc1wiO1xuXG5yZW5kZXJIb21lKCk7XG5cbmNvbnN0IGJ1dHRvbkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG5jb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuY29uc3QgYnV0dG9uUmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlc1wiKTtcblxuYnV0dG9uSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbmRlckhvbWUoKTtcbn0pO1xuXG5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuZGVyTWVudSgpO1xufSk7XG5cbmJ1dHRvblJlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW5kZXJSZWNpcGVzKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=