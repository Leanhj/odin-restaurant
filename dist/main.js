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
// const rotatingDiv = document.createElement("div");

permanentDiv.classList = "permanent";

let perNames = ["Beer", "Salad", "Bread", "Spaghetti", "Pizza", "Coffee"];
let perPrices = [400, 220, 120, 240, 600, 300];
for (let i = 0; i < perNames.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemDiv.classList = "item";
    itemName.classList = "item-name";
    itemPrice.classList = "item-price";

    itemName.textContent = perNames[i];
    itemPrice.textContent = perPrices[i];

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);

    permanentDiv.appendChild(itemDiv);
}

function renderMenu() {
    content.replaceChildren();
    content.appendChild(permanentDiv);
    // content.appendChild(rotatingDiv);
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

recipesDiv.classList = "recipes";

let names = ["Hashbrowns", "Omelet", "Pancakes", "Bread", "Tortilla", "Pizza", "Maki Roll", 
            "Triple Shot Espresso", "Cookie"];
let prices = [50, 100, 100, 100, 100, 150, 300, 5000, 300];
for (let i = 0; i < names.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemDiv.classList = "item";
    itemName.classList = "item-name";
    itemPrice.classList = "item-price";

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

const buttonHome = document.querySelector(".button-home");
const buttonMenu = document.querySelector(".button-menu");
const buttonRecipes = document.querySelector(".button-recipes");

buttonHome.addEventListener("click", () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    buttonHome.classList = "button-home button-selected";
    buttonMenu.classList = "button-menu";
    buttonRecipes.classList = "button-recipes";
});

buttonMenu.addEventListener("click", () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    buttonHome.classList = "button-home";
    buttonMenu.classList = "button-menu button-selected";
    buttonRecipes.classList = "button-recipes";
});

buttonRecipes.addEventListener("click", () => {
    (0,_recipes__WEBPACK_IMPORTED_MODULE_2__["default"])();
    buttonHome.classList = "button-home";
    buttonMenu.classList = "button-menu";
    buttonRecipes.classList = "button-recipes button-selected";
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDcEJ6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDaEN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUMvQjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNBO0FBQ007O0FBRXRDLGlEQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9yZWNpcGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG50aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG5zY2hlZHVsZS5jbGFzc0xpc3QgPSBcInNjaGVkdWxlXCI7XG5sb2NhdGlvbi5jbGFzc0xpc3QgPSBcImxvY2F0aW9uXCI7XG5cbnRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgU3RhcmRyb3AgU2Fsb29uXCI7XG5zY2hlZHVsZS50ZXh0Q29udGVudCA9IFwiMTI6MDBwbSB0byAxMjowMGFtXCI7XG5sb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiQ2VudGVyIG9mIFBlbGljYW4gVG93blwiO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWU7IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHBlcm1hbmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyBjb25zdCByb3RhdGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbnBlcm1hbmVudERpdi5jbGFzc0xpc3QgPSBcInBlcm1hbmVudFwiO1xuXG5sZXQgcGVyTmFtZXMgPSBbXCJCZWVyXCIsIFwiU2FsYWRcIiwgXCJCcmVhZFwiLCBcIlNwYWdoZXR0aVwiLCBcIlBpenphXCIsIFwiQ29mZmVlXCJdO1xubGV0IHBlclByaWNlcyA9IFs0MDAsIDIyMCwgMTIwLCAyNDAsIDYwMCwgMzAwXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgcGVyTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0ID0gXCJpdGVtXCI7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJpdGVtLW5hbWVcIjtcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0ID0gXCJpdGVtLXByaWNlXCI7XG5cbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHBlck5hbWVzW2ldO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHBlclByaWNlc1tpXTtcblxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIHBlcm1hbmVudERpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGVybWFuZW50RGl2KTtcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKHJvdGF0aW5nRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgcmVjaXBlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbnJlY2lwZXNEaXYuY2xhc3NMaXN0ID0gXCJyZWNpcGVzXCI7XG5cbmxldCBuYW1lcyA9IFtcIkhhc2hicm93bnNcIiwgXCJPbWVsZXRcIiwgXCJQYW5jYWtlc1wiLCBcIkJyZWFkXCIsIFwiVG9ydGlsbGFcIiwgXCJQaXp6YVwiLCBcIk1ha2kgUm9sbFwiLCBcbiAgICAgICAgICAgIFwiVHJpcGxlIFNob3QgRXNwcmVzc29cIiwgXCJDb29raWVcIl07XG5sZXQgcHJpY2VzID0gWzUwLCAxMDAsIDEwMCwgMTAwLCAxMDAsIDE1MCwgMzAwLCA1MDAwLCAzMDBdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaXRlbURpdi5jbGFzc0xpc3QgPSBcIml0ZW1cIjtcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QgPSBcIml0ZW0tbmFtZVwiO1xuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QgPSBcIml0ZW0tcHJpY2VcIjtcblxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZXNbaV07XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2VzW2ldO1xuXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgcmVjaXBlc0Rpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVjaXBlcygpIHtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVjaXBlc0Rpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclJlY2lwZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgcmVuZGVyUmVjaXBlcyBmcm9tIFwiLi9yZWNpcGVzXCI7XG5cbnJlbmRlckhvbWUoKTtcblxuY29uc3QgYnV0dG9uSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWhvbWVcIik7XG5jb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbWVudVwiKTtcbmNvbnN0IGJ1dHRvblJlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZWNpcGVzXCIpO1xuXG5idXR0b25Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuZGVySG9tZSgpO1xuICAgIGJ1dHRvbkhvbWUuY2xhc3NMaXN0ID0gXCJidXR0b24taG9tZSBidXR0b24tc2VsZWN0ZWRcIjtcbiAgICBidXR0b25NZW51LmNsYXNzTGlzdCA9IFwiYnV0dG9uLW1lbnVcIjtcbiAgICBidXR0b25SZWNpcGVzLmNsYXNzTGlzdCA9IFwiYnV0dG9uLXJlY2lwZXNcIjtcbn0pO1xuXG5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuZGVyTWVudSgpO1xuICAgIGJ1dHRvbkhvbWUuY2xhc3NMaXN0ID0gXCJidXR0b24taG9tZVwiO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0ID0gXCJidXR0b24tbWVudSBidXR0b24tc2VsZWN0ZWRcIjtcbiAgICBidXR0b25SZWNpcGVzLmNsYXNzTGlzdCA9IFwiYnV0dG9uLXJlY2lwZXNcIjtcbn0pO1xuXG5idXR0b25SZWNpcGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuZGVyUmVjaXBlcygpO1xuICAgIGJ1dHRvbkhvbWUuY2xhc3NMaXN0ID0gXCJidXR0b24taG9tZVwiO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0ID0gXCJidXR0b24tbWVudVwiO1xuICAgIGJ1dHRvblJlY2lwZXMuY2xhc3NMaXN0ID0gXCJidXR0b24tcmVjaXBlcyBidXR0b24tc2VsZWN0ZWRcIjtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==