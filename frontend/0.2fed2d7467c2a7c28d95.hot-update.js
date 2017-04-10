webpackHotUpdate(0,{

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(162);

	var _reduxForm = __webpack_require__(636);

	var _posts = __webpack_require__(689);

	var _posts2 = _interopRequireDefault(_posts);

	var _postForm = __webpack_require__(690);

	var _postForm2 = _interopRequireDefault(_postForm);

	var _reducer_categories = __webpack_require__(691);

	var _reducer_categories2 = _interopRequireDefault(_reducer_categories);

	var _reducer_settings = __webpack_require__(692);

	var _reducer_settings2 = _interopRequireDefault(_reducer_settings);

	var _reducer_profiles = __webpack_require__(693);

	var _reducer_profiles2 = _interopRequireDefault(_reducer_profiles);

	var _reducer_auth = __webpack_require__(694);

	var _reducer_auth2 = _interopRequireDefault(_reducer_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	    posts: _posts2.default,
	    postForm: _postForm2.default,
	    categories: _reducer_categories2.default,
	    settings: _reducer_settings2.default,
	    profiles: _reducer_profiles2.default,
	    auth: _reducer_auth2.default
	});

	exports.default = rootReducer;

/***/ }

})