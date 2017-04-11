webpackHotUpdate(0,{

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(636);

	var _auth = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/auth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var actions = _interopRequireWildcard(_auth);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signin = function (_Component) {
					_inherits(Signin, _Component);

					function Signin() {
									_classCallCheck(this, Signin);

									return _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).apply(this, arguments));
					}

					_createClass(Signin, [{
									key: 'handleFormSubmit',
									value: function handleFormSubmit(_ref) {
													var username = _ref.username,
													    password = _ref.password;

													/* console.log(username, password);*/
													// log user in
													// signinUser comes from actions.
													// it is an action creator that sends an username/pass to the server
													// and if they're correct, saves the token
													this.props.signinUser({ username: username, password: password });
									}
					}, {
									key: 'renderAlert',
									value: function renderAlert() {
													if (this.props.errorMessage) {
																	return _react2.default.createElement(
																					'div',
																					{ className: 'alert alert-danger' },
																					this.props.errorMessage
																	);
													}
									}
					}, {
									key: 'render',
									value: function render() {
													/* props from reduxForm */
													var _props = this.props,
													    handleSubmit = _props.handleSubmit,
													    _props$fields = _props.fields,
													    username = _props$fields.username,
													    password = _props$fields.password;
													/* console.log(...username);*/

													return _react2.default.createElement(
																	'form',
																	{ onSubmit: handleSubmit(this.handleFormSubmit.bind(this)) },
																	_react2.default.createElement(
																					'fieldset',
																					{ className: 'form-group' },
																					_react2.default.createElement(
																									'label',
																									null,
																									'Username:'
																					),
																					_react2.default.createElement('input', _extends({}, username, { className: 'form-control' }))
																	),
																	_react2.default.createElement(
																					'fieldset',
																					{ className: 'form-group' },
																					_react2.default.createElement(
																									'label',
																									null,
																									'Password:'
																					),
																					_react2.default.createElement('input', _extends({}, password, { type: 'password', className: 'form-control' }))
																	),
																	this.renderAlert(),
																	_react2.default.createElement(
																					'button',
																					{ action: 'submit', className: 'btn btn-primary' },
																					'Sign in'
																	)
													);
									}
					}]);

					return Signin;
	}(_react.Component);

	function mapStateToProps(state) {
					return { errorMessage: state.auth.error };
	}

	exports.default = (0, _reduxForm.reduxForm)({
					form: 'signin',
					fields: ['username', 'password']
	}, mapStateToProps, actions)(Signin);

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
				value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(155);

	var _auth = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../actions/auth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var actions = _interopRequireWildcard(_auth);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signout = function (_Component) {
				_inherits(Signout, _Component);

				function Signout() {
							_classCallCheck(this, Signout);

							return _possibleConstructorReturn(this, (Signout.__proto__ || Object.getPrototypeOf(Signout)).apply(this, arguments));
				}

				_createClass(Signout, [{
							key: 'componentWillMount',
							value: function componentWillMount() {
										// as soon as it renders - login user out
										console.log(">>>> src/components/auth/signout.js:");
										console.log("Calling signoutUser action creator.");
										this.props.signoutUser();
							}
				}, {
							key: 'render',
							value: function render() {
										return _react2.default.createElement(
													'div',
													null,
													'Signed out!'
										);
							}
				}]);

				return Signout;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(null, actions)(Signout);

/***/ }

})