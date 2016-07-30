webpackHotUpdate(0,{

/***/ 747:
/*!****************************************************************!*\
  !*** ./redux-cordova-sqlite-flow-integrate/www/react/main.jsx ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 29), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 30), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 22), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	__webpack_require__(/*! babel-polyfill */ 362);
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 732);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 216);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 322);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 137);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 309);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 723);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 794);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 135);
	
	var _LayoutCtrl = __webpack_require__(/*! ./containers/LayoutCtrl */ 745);
	
	var _LayoutCtrl2 = _interopRequireDefault(_LayoutCtrl);
	
	var _Root = __webpack_require__(/*! ./containers/Root */ 746);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _store = __webpack_require__(/*! ./store */ 751);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Redux 用ライブラリ
	var storeObject = (0, _store2.default)();
	
	// Material UI 用ライブラリ
	
	
	// ルーティング用ライブラリ
	
	var store = storeObject.store;
	
	// Material UIを使用する場合、ReactがV1.0になるまでは必要らしい
	(0, _reactTapEventPlugin2.default)();
	
	var Layout = function Layout(props) {
	  return _react2.default.createElement(_LayoutCtrl2.default, props);
	};
	
	// immutable.jsとreact-router-reduxを併用する場合はselectLocationStateオプションに下記をセットする必要がある
	// redux-immutableを使っていないのでstate.get('routing')ではない
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store, {
	  selectLocationState: function selectLocationState(state) {
	    return state.routing.toJS();
	  }
	});
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  palette: {
	    primary1Color: _colors.grey50,
	    accent1Color: _colors.redA200
	  }
	});
	
	// document.addEventListener('deviceready', () => {
	//   console.log('deviceready');
	(0, _reactDom.render)(_react2.default.createElement(
	  _MuiThemeProvider2.default,
	  { muiTheme: muiTheme },
	  _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	      _reactRouter.Router,
	      { history: history },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: Layout },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Root2.default })
	      )
	    )
	  )
	), document.getElementById('app'));
	storeObject.startSaga();
	// }, false);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 31); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 20)(module)))

/***/ }

})
//# sourceMappingURL=0.a93f54fe142f43138c05.hot-update.js.map