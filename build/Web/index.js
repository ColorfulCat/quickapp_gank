(function(){
      
  var createPageHandler = function() {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "web",
	      "attr": {
	        "id": "web",
	        "src": function () {return this.srcUrl}
	      },
	      "id": "web",
	      "classList": [
	        "web-page"
	      ],
	      "events": {
	        "error": "onError",
	        "titlereceive": "onTitleReceive",
	        "pagestart": "onPageStart"
	      }
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "flexDirection": "column",
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['url'],
	  data: {
	    srcUrl: ""
	  },
	  onInit: function onInit() {
	    var self = this;
	    self.srcUrl = self.url;
	  },
	
	  onBackPress: function onBackPress(e) {
	    var self = this;
	    var webview = this.$element('web');
	    webview.canBack({
	      callback: function (e) {
	        if (e) {
	          webview.back();
	        } else {
	          _system2.default.back();
	        }
	      }.bind(self)
	    });
	    return true;
	  },
	  onMenuPress: function onMenuPress(e) {
	    console.log("onMenuPress");
	    var self = this;
	    var prompt = $app_require$('@app-module/system.prompt');
	    var appInfo = $app_require$('@app-module/system.app').getInfo();
	    prompt.showContextMenu({
	      itemList: ['重新加载'],
	      success: function success(ret) {
	        switch (ret.index) {
	          case 0:
	            var webview = self.$element('web');
	            webview.reload();
	            break;
	          default:
	        }
	      }
	    });
	  },
	  onPageStart: function onPageStart(e) {
	    console.log("onPageStart - ", JSON.stringify(e.url));
	  },
	  onPageError: function onPageError(e) {
	    console.log("onPageError - ", JSON.stringify(e.url));
	  },
	  onPageFinish: function onPageFinish(e) {
	    console.log("onPageFinish - ", JSON.stringify(e.url));
	  },
	  onTitleReceive: function onTitleReceive(e) {
	    console.log("onTitleReceive = ", e.title);
	    if (e.title !== "") {
	      this.$page.setTitleBar({ text: e.title });
	    }
	  },
	  onError: function onError(e) {
	    console.log("onError - ", JSON.stringify(e));
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map