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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/electron.ts":
/*!*************************!*\
  !*** ./src/electron.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _a = __webpack_require__(/*! electron */ \"electron\"), app = _a.app, BrowserWindow = _a.BrowserWindow, systemPreferences = _a.systemPreferences;\nfunction createWindow() {\n    // 创建浏览器窗口\n    var mainWindow = new BrowserWindow({\n        width: 800,\n        height: 520,\n        center: true,\n        resizable: false,\n        minimizable: true,\n        maximizable: false,\n        fullscreenable: false,\n        webPreferences: {\n            nodeIntegration: true\n        }\n    });\n    // 并且为你的应用加载index.html\n    mainWindow.loadFile('index.html');\n    // 打开开发者工具\n    mainWindow.webContents.openDevTools();\n}\n// This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// 部分 API 在 ready 事件触发后才能使用。\napp.on('ready', createWindow);\n// Quit when all windows are closed.\napp.on('window-all-closed', function () {\n    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，\n    // 否则绝大部分应用及其菜单栏会保持激活。\n    if (process.platform != 'darwin') {\n        app.quit();\n    }\n});\napp.on('activate', function () {\n    // 在macOS上，当单击dock图标并且没有其他窗口打开时，\n    // 通常在应用程序中重新创建一个窗口。\n    if (BrowserWindow.getAllWindows().length === 0) {\n        createWindow();\n    }\n});\n// In this file you can include the rest of your app's specific main process\n// code. 也可以拆分成几个文件，然后用 require 导入。\n// In the renderer process.\nconsole.log(\"=======master\");\nconsole.log(systemPreferences.getMediaAccessStatus(\"screen\"));\n\n\n//# sourceURL=webpack:///./src/electron.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });