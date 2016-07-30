webpackHotUpdate(0,{

/***/ 742:
/*!************************************************************************!*\
  !*** ./redux-cordova-sqlite-flow-integrate/www/react/actions/sagas.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 29), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 30), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 22), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 375);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = rootSaga;
	
	var _reduxSaga = __webpack_require__(/*! redux-saga */ 355);
	
	var _effects = __webpack_require__(/*! redux-saga/effects */ 864);
	
	var _constants = __webpack_require__(/*! ./constants */ 211);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [scream, handleRequestSaga, handleDeviceReadySaga, rootSaga].map(_regenerator2.default.mark);
	
	function scream(action) {
	  return _regenerator2.default.wrap(function scream$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.call)(_reduxSaga.delay, 3000);
	
	        case 2:
	          console.log(action);
	          console.log('aieeeeee!');
	
	        case 4:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function handleRequestSaga() {
	  return _regenerator2.default.wrap(function handleRequestSaga$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          console.log('handleRequestUserStart');
	          return _context2.delegateYield((0, _reduxSaga.takeEvery)('SAGA_TAKE', scream), 't0', 2);
	
	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	// ON_DEVICE_READYを受け取ったら一度だけ起動して後続の初期化処理を開始する
	function handleDeviceReadySaga() {
	  return _regenerator2.default.wrap(function handleDeviceReadySaga$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.take)(_constants.ON_DEVICE_READY);
	
	        case 2:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	function rootSaga() {
	  return _regenerator2.default.wrap(function rootSaga$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          console.log('rootSagaStart');
	          _context4.next = 3;
	          return (0, _effects.fork)(handleRequestSaga);
	
	        case 3:
	          _context4.next = 5;
	          return (0, _effects.fork)(handleDeviceReadySaga);
	
	        case 5:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 31); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "sagas.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 20)(module)))

/***/ }

})
//# sourceMappingURL=0.a2c87ab9a309c092e264.hot-update.js.map