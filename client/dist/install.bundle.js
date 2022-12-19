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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById(\"buttonInstall\");\r\n\r\nwindow.addEventListener('beforeinstallprompt', (event) => {\r\n    console.log('hit')\r\n    console.log(\"event\" + event)\r\n    event.preventDefault();\r\n    // Store the triggered events\r\n    window.deferredPrompt = event;\r\n\r\n    // Remove the hidden class from the button.\r\n    butInstall.classList.toggle('hidden', false);\r\n});\r\n\r\nbutInstall.addEventListener('click', async () => {\r\n    const promptEvent = window.deferredPrompt;\r\n    // console.log(promptEvent)\r\n    if (!promptEvent) {\r\n        return;\r\n    }\r\n\r\n    // Show prompt\r\n    promptEvent.prompt();\r\n\r\n    // Reset the deferred prompt variable, it can only be used once.\r\n    window.deferredPrompt = null;\r\n\r\n    butInstall.classList.toggle('hidden', true);\r\n});\r\n\r\nwindow.addEventListener('appinstalled', (event) => {\r\n    // Clear prompt\r\n    console.log('install hit')\r\n    window.deferredPrompt = null;\r\n}); \r\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;