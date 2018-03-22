(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(14)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(15);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  showMenu: _util2.default.showMenu,
	  createShortcut: _util2.default.createShortcut
	};
	(exports.default || module.exports).manifest = {"package":"com.devislee.gankio","name":"gankio","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.webview"},{"name":"system.prompt"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.file"},{"name":"system.geolocation"},{"name":"system.media"},{"name":"system.notification"},{"name":"system.barcode"},{"name":"system.sensor"},{"name":"system.share"},{"name":"system.shortcut"},{"name":"system.storage"},{"name":"system.network"},{"name":"system.request"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"About":{"component":"index"},"Web":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#000000","titleBarTextColor":"#ffffff","backgroundColor":"#efefef","menu":true,"pages":{"Home":{"titleBarText":"Gank","menu":true},"About":{"titleBarText":"关于","menu":false}}}};
	}

/***/ },

/***/ 15:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 取消
	          break;
	        default:
	          prompt.showToast({ message: 'error' });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut
	};

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.devislee.gankio","name":"gankio","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.webview"},{"name":"system.prompt"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.file"},{"name":"system.geolocation"},{"name":"system.media"},{"name":"system.notification"},{"name":"system.barcode"},{"name":"system.sensor"},{"name":"system.share"},{"name":"system.shortcut"},{"name":"system.storage"},{"name":"system.network"},{"name":"system.request"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"About":{"component":"index"},"Web":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#000000","titleBarTextColor":"#ffffff","backgroundColor":"#efefef","menu":true,"pages":{"Home":{"titleBarText":"Gank","menu":true},"About":{"titleBarText":"关于","menu":false}}}};
  }
})();
//# sourceMappingURL=app.js.map