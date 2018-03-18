/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

eval("const greenHeartEmoji = __webpack_require__(1);\n\nconsole.log(\"development\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxsby5qcz9kYmRhIl0sIm5hbWVzIjpbImdyZWVuSGVhcnRFbW9qaSIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxrQkFBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF4Qjs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLGFBQVoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdyZWVuSGVhcnRFbW9qaSA9IHJlcXVpcmUoJ2Vtb2ppLWdyZWVuLWhlYXJ0Jyk7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVsbG8uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

eval("module.exports = '💚'//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2Vtb2ppLWdyZWVuLWhlYXJ0L2luZGV4LmpzP2M2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gJ/CfkponXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Vtb2ppLWdyZWVuLWhlYXJ0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

eval("__webpack_require__(0);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUFBLENBQVMsQ0FBVCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSAoJy4vaGVsbG8nKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);