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

	__webpack_require__(4)
	var $app_template$ = __webpack_require__(8)
	var $app_style$ = __webpack_require__(9)
	var $app_script$ = __webpack_require__(10)
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
	$app_define$('@app-component/pagelist', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
	  "attr": {},
	  "classList": [
	    "content"
	  ],
	  "children": [
	    {
	      "type": "refresh",
	      "attr": {
	        "refreshing": function () {return this.isRefreshing},
	        "offset": "200"
	      },
	      "classList": [
	        "refresh-div"
	      ],
	      "events": {
	        "refresh": "refresh"
	      },
	      "children": [
	        {
	          "type": "list",
	          "attr": {
	            "id": "list"
	          },
	          "classList": [
	            "page-list"
	          ],
	          "id": "list",
	          "events": {
	            "scrollbottom": "scrollbottom",
	            "scrolltop": "scrolltop"
	          },
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "list-item"
	              },
	              "repeat": function () {return this.listData},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item-content-div"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.goToWeb(this.$item.url,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.desc}
	                      },
	                      "classList": [
	                        "item-title"
	                      ],
	                      "shown": function () {return (this.$item.type!=='福利')}
	                    },
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.url}
	                      },
	                      "classList": [
	                        "item-image"
	                      ],
	                      "shown": function () {return (this.$item.type==='福利')}
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.formatDate(this.$item.publishedAt)}
	                      },
	                      "classList": [
	                        "item-date"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "bottom-item"
	              },
	              "shown": function () {return this.canLoadMore},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.loadingText}
	                  },
	                  "classList": [
	                    "bottom-text"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://gw.alicdn.com/tps/TB1Wyj2KFXXXXXOXXXXXXXXXXXX-135-135.png"
	          },
	          "shown": function () {return this.showGoToTop},
	          "classList": [
	            "showgototop"
	          ],
	          "events": {
	            "click": function (evt) {this.gototop(evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  ".content": {
	    "width": "750px",
	    "height": "100%"
	  },
	  ".refresh-div": {
	    "flexDirection": "column",
	    "flex": 1,
	    "width": "750px",
	    "textAlign": "center",
	    "progressColor": "#ff1234"
	  },
	  ".page-list": {
	    "flex": 1,
	    "width": "750px"
	  },
	  ".item-content-div": {
	    "width": "100%",
	    "marginLeft": "20px",
	    "marginRight": "20px",
	    "marginTop": "20px",
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingTop": "15px",
	    "paddingRight": "15px",
	    "paddingBottom": "15px",
	    "paddingLeft": "15px",
	    "borderRadius": "8px"
	  },
	  ".item-image": {
	    "width": "680px",
	    "height": "680px",
	    "resizeMode": "cover",
	    "backgroundColor": "rgba(0,0,0,0.03)"
	  },
	  ".item-image-small": {
	    "width": "680px",
	    "height": "340px",
	    "resizeMode": "contain",
	    "backgroundColor": "rgba(0,0,0,0.03)"
	  },
	  ".item-title": {
	    "width": "100%",
	    "textAlign": "left",
	    "fontSize": "30px",
	    "color": "#666666",
	    "marginBottom": "15px"
	  },
	  ".item-date": {
	    "width": "100%",
	    "height": "30px",
	    "textAlign": "right",
	    "fontSize": "24px",
	    "color": "#999999",
	    "marginTop": "15px"
	  },
	  ".bottom-text": {
	    "width": "750px",
	    "height": "120px",
	    "textAlign": "center",
	    "fontSize": "30px"
	  },
	  ".showgototop": {
	    "position": "fixed",
	    "width": "80px",
	    "height": "80px",
	    "right": "30px",
	    "bottom": "60px",
	    "resizeMode": "contain",
	    "animationName": "showgototop",
	    "animationDuration": "800ms",
	    "animationFillMode": "forwards",
	    "animationTimingFunction": "ease-in"
	  },
	  "@KEYFRAMES": {
	    "showgototop": [
	      {
	        "transform": "{\"translateY\":\"200px\"}",
	        "time": 0
	      },
	      {
	        "transform": "{\"translateY\":\"0px\"}",
	        "time": 100
	      }
	    ]
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: ['mydata'],
		data: {
			listData: [],
			currentPage: 0,
			pageSize: 30,
			showGoToTop: false,
			canLoadMore: true,
			isRefreshing: false,
			loadingText: "正在加载…"
		},
		onInit: function onInit() {
			this.getDataList(false);
		},
	
		getDataList: function getDataList(isLoadMore) {
			var self = this;
			_system2.default && _system2.default.fetch({
				url: "http://gank.io/api/data/" + self.mydata.tag + "/" + self.pageSize + "/" + (self.currentPage + 1),
				success: function success(data) {
					var tempData = [];
					try {
						tempData = JSON.parse(data.data).results;
					} catch (error) {
						console.log("JSON.parse(data.data).results catch error");
					}
					console.log("fetch success ", tempData.length);
					if (tempData.length < self.pageSize) {
						self.canLoadMore = false;
					}
					if (self.currentPage > 0) {
						self.listData = self.listData.concat(tempData);
					} else {
						self.listData = tempData;
					}
					self.currentPage = self.currentPage + 1;
					self.isRefreshing = false;
				},
				fail: function fail(data, code) {
					console.log("fetch fail, code=" + code);
					self.loadingText = "很抱歉，加载失败";
					self.isRefreshing = false;
				}
			});
		},
		refresh: function refresh(e) {
			this.isRefreshing = e.refreshing;
			this.currentPage = 0;
			this.showGoToTop = false;
			this.getDataList(false);
		},
		scrollbottom: function scrollbottom(e) {
			console.log("scrollbottom");
			if (this.canLoadMore) {
				this.getDataList(true);
			}
			if (!this.showGoToTop) {
				this.showGoToTop = true;
			}
		},
		scrolltop: function scrolltop(e) {
			console.log("scrolltop");
			if (this.showGoToTop) {
				this.showGoToTop = false;
			}
		},
		goToWeb: function goToWeb(urlString) {
			_system4.default.push({
				uri: '/Web',
				params: { url: urlString }
			});
		},
	
		gototop: function gototop(e) {
			this.showGoToTop = false;
			this.$element('list').scrollTo({ index: 0, smooth: true });
		},
		formatDate: function formatDate(dateString) {
			if (dateString) {
				var date = new Date(dateString);
				if (date) {
					return date.getMonth() + 1 + "月" + date.getDate() + "日";
				}
				return dateString;
			}
			return "";
		}
	};}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "main-page"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "events": {
	        "change": "onTabChange"
	      },
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "navigation-tab"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.item.name}
	              },
	              "classList": [
	                "navigation-item"
	              ],
	              "style": {
	                "color": function () {return (this.currentIndex===this.index)?'#ff1234':'#666666'}
	              },
	              "repeat": {
	                "exp": function () {return this.tabs},
	                "key": "index",
	                "value": "item"
	              }
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "pagelist",
	              "attr": {
	                "mydata": function () {return this.$item}
	              },
	              "repeat": function () {return this.tabs}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  ".main-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".main-swiper": {
	    "width": "100%",
	    "height": "300px",
	    "backgroundColor": "#666666"
	  },
	  ".navigation-tab": {
	    "height": "80px",
	    "width": "750px",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "alignContent": "space-between",
	    "flexWrap": "nowrap",
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#cccccc"
	  },
	  ".navigation-item": {
	    "width": "100%",
	    "height": "100%",
	    "textAlign": "center",
	    "color": "#666666",
	    "fontSize": "28px"
	  },
	  ".page-list": {
	    "height": "500px",
	    "flex": 1,
	    "width": "750px",
	    "backgroundColor": "#888888"
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.webview');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.storage');
	
	var _system8 = _interopRequireDefault(_system7);
	
	var _system9 = $app_require$('@app-module/system.fetch');
	
	var _system10 = _interopRequireDefault(_system9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        title: 'Gank',
	        currentIndex: 0,
	        tabs: [{
	            "name": "前端",
	            "tag": "前端"
	        }, {
	            "name": "Android",
	            "tag": "Android"
	        }, {
	            "name": "iOS",
	            "tag": "iOS"
	        }, {
	            "name": "资源",
	            "tag": "拓展资源"
	        }, {
	            "name": "福利",
	            "tag": "福利"
	        }]
	    },
	    onInit: function onInit() {
	        console.info("homepage init");
	        var self = this;
	    },
	    onShow: function onShow() {
	        console.log("onShow");
	    },
	    onHide: function onHide() {
	        console.info('onHide');
	    },
	    onBackPress: function onBackPress() {
	        console.info(' ~~~ onBackPress');
	    },
	    onMenuPress: function onMenuPress() {
	        console.info(' ~~~ onMenuPress');
	        this.$app.showMenu();
	    },
	
	    onTabChange: function onTabChange(e) {
	        if (e) {
	            console.log("onTabChange", JSON.stringify(e.index));
	            this.currentIndex = e.index;
	        } else {
	            console.log("onTabChange");
	        }
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