webpackHotUpdate(0,{

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(155);

	var _reactRouter = __webpack_require__(195);

	var _reactAddonsCssTransitionGroup = __webpack_require__(522);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _index = __webpack_require__(529);

	var _reactBootstrap = __webpack_require__(259);

	var _reactRouterBootstrap = __webpack_require__(556);

	var _screamingSun = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../img/screaming-sun.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _screamingSun2 = _interopRequireDefault(_screamingSun);

	var _SubscribeForm = __webpack_require__(560);

	var _SubscribeForm2 = _interopRequireDefault(_SubscribeForm);

	var _reactFontawesome = __webpack_require__(561);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header(props) {
			_classCallCheck(this, Header);

			var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

			_this.state = { showModal: false };

			_this.openModal = _this.openModal.bind(_this);
			_this.closeModal = _this.closeModal.bind(_this);
			return _this;
		}

		_createClass(Header, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				/* call action creator */
				/* action creator will grab the post with this id from the API   */
				/* and send it to the reducer */
				/* reducer will add it to the state */
				this.props.fetchCategories();
				/* this.props.fetchSettings();	*/
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				if (this.props.subscribed) {
					/* If the modal is open - close it before showing
	       subscription confirmation*/
					if (this.state.showModal) {
						this.setState({ showModal: false });
					}
					/* After the user submits email, I set subscribed state to true.
	       If it is true - wait for 2 seconds(displaying success alert),
	       then send out the action flipping subscribed back to false. */
					var close = this.props.subscribedClose;
					setTimeout(function () {
						close();
					}, 2000);
				}
			}
		}, {
			key: 'renderSubscribedConfirmation',
			value: function renderSubscribedConfirmation() {
				/* Display success alert while subscribed state is set to true. */
				if (this.props.subscribed) {
					return _react2.default.createElement(
						'div',
						{ className: 'alert alert-success' },
						_react2.default.createElement(
							'strong',
							null,
							'Success!'
						),
						' Thank you for subscribing!'
					);
				}
			}
		}, {
			key: 'openModal',
			value: function openModal() {
				this.setState({ showModal: true });
			}
		}, {
			key: 'closeModal',
			value: function closeModal() {
				this.setState({ showModal: false });
			}
		}, {
			key: 'renderCategories',
			value: function renderCategories() {
				var categories = this.props.categories.results;
				/* console.log("Rendering categories: " + categories);*/

				if (!categories || categories.length == 0) {
					return null;
				};

				var categories_list = categories.map(function (category) {
					/* console.log("Looping over categories. Category: " + category);*/
					return _react2.default.createElement(
						'li',
						{ key: category.slug },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/category/' + category.slug },
							category.title
						)
					);
				});

				return _react2.default.createElement(
					'span',
					{ className: 'dropdown' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/' },
						'Browse'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'dropdown-menu' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/' },
								'All'
							)
						),
						categories_list
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						_reactBootstrap.Modal,
						{ show: this.state.showModal,
							onHide: this.closeModal },
						_react2.default.createElement(
							'div',
							{ className: 'panel subscription-box' },
							_react2.default.createElement(_SubscribeForm2.default, null)
						)
					),
					this.renderSubscribedConfirmation(),
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12 col-sm-6 search' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ className: 'logo', to: '/' },
									_react2.default.createElement('img', { src: _screamingSun2.default }),
									'lumen',
									_react2.default.createElement(
										'span',
										{ className: 'bold' },
										'writes'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12 col-sm-6 main-menu' },
								_react2.default.createElement(
									'div',
									{ className: 'menu' },
									_react2.default.createElement(
										'a',
										{ onClick: this.openModal },
										'Subscribe'
									),
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/about/' },
										'About'
									),
									this.props.authenticated ? _react2.default.createElement(
										_reactRouter.Link,
										{ key: 2, to: { pathname: '/logout' } },
										_react2.default.createElement('i', { className: 'fa fa-sign-out' })
									) : null
								)
							)
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Modal,
						null,
						'Modal'
					)
				);
			}
		}]);

		return Header;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			authenticated: state.auth.authenticated,
			categories: state.categories.all,
			settings: state.settings.all,
			subscribed: state.profiles.subscribed
		};
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchCategories: _index.fetchCategories, fetchSettings: _index.fetchSettings, subscribedClose: _index.subscribedClose })(Header);

/***/ }

})