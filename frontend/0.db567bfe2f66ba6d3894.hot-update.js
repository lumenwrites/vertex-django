webpackHotUpdate(0,{

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	exports.ROOT_URL = undefined;
	exports.signinUser = signinUser;
	exports.signupUser = signupUser;
	exports.signoutUser = signoutUser;
	exports.authError = authError;
	exports.fetchMessage = fetchMessage;

	var _axios = __webpack_require__(530);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactRouter = __webpack_require__(195);

	var _types = __webpack_require__(685);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var host = window.location.host.split(':')[0];
	var ROOT_URL = exports.ROOT_URL = 'http://' + host + '/api/v1';

	function signinUser(_ref) {
				var username = _ref.username,
				    password = _ref.password;

				return function (dispatch) {
							// send username/password
							// .then - success, .catch - fail.
							console.log(">>>> src/actions/auth.js:");
							console.log("Sending POST request from signinUser.");
							/* console.log("Username: " + username);
	         console.log("Password: " + password);	*/
							_axios2.default.post(ROOT_URL + '/auth/', { username: username, password: password }).then(function (response) {
										console.log("Successfully signed in!");
										// if request is good
										// - update state to indicate that I'm signed in
										dispatch({ type: _types.AUTH_USER });
										console.log("Auth action dispatched(to flip auth state to true)");
										// - save JWT token
										localStorage.setItem('token', response.data.token);
										console.log("Token saved!");
										// - redirect to /feature
										_reactRouter.browserHistory.push('/');
										console.log("Redirected to /");
							}).catch(function () {
										// if request is bad
										dispatch(authError('Bad Login Info'));
							});
				};
	}

	function signupUser(_ref2) {
				var username = _ref2.username,
				    password = _ref2.password;

				return function (dispatch) {
							// send username/password
							// .then - success, .catch - fail.
							_axios2.default.post(ROOT_URL + '/signup', { username: username, password: password }).then(function (response) {
										// if request is good
										// - update state to indicate that I'm signed up
										dispatch({ type: _types.AUTH_USER });
										// - save JWT token
										localStorage.setItem('token', response.data.token);
										// - redirect to /feature
										_reactRouter.browserHistory.push('/');
							}).catch(function () {
										// if request is bad - add error to the state.
										dispatch(authError('User with this username already exists'));
							});
				};
	}

	function signoutUser() {
				// delete token and signout
				console.log(">>>> src/actions/auth.js:");
				console.log("Signing out user, deleting token from localStorage.");
				localStorage.removeItem('token');
				console.log("Redirecting to /, and dispatching action UNAUTH_USER.");
				_reactRouter.browserHistory.push('/');
				return {
							type: _types.UNAUTH_USER
				};
	}

	function authError(error) {
				return {
							type: _types.AUTH_ERROR,
							payload: error
				};
	}

	function fetchMessage() {
				var config = {
							headers: { authorization: localStorage.getItem('token') }
				};

				return function (dispatch) {
							_axios2.default.get(ROOT_URL, config).then(function (response) {
										/* console.log(response);*/
										dispatch({
													type: _types.FETCH_MESSAGE,
													payload: response.data.message
										});
							});
				};
	}

/***/ }

})