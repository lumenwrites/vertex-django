webpackHotUpdate(0,{

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	exports.ROOT_URL = exports.CREATE_SUBSCRIBER = exports.FETCH_SETTINGS = exports.FETCH_CATEGORIES = exports.UPDATE_POST = exports.DELETE_POST = exports.CREATE_POST = exports.FETCH_POST = exports.FETCH_POSTS = undefined;
	exports.updatePostBody = updatePostBody;
	exports.updatePostTags = updatePostTags;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.createPost = createPost;
	exports.updatePost = updatePost;
	exports.deletePost = deletePost;
	exports.fetchCategories = fetchCategories;
	exports.fetchSettings = fetchSettings;
	exports.createSubscriber = createSubscriber;
	exports.subscribedClose = subscribedClose;

	var _axios = __webpack_require__(530);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactRouter = __webpack_require__(195);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FETCH_POSTS = exports.FETCH_POSTS = 'FETCH_POSTS';
	var FETCH_POST = exports.FETCH_POST = 'FETCH_POST';
	var CREATE_POST = exports.CREATE_POST = 'CREATE_POST';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	var UPDATE_POST = exports.UPDATE_POST = 'UPDATE_POST';
	var FETCH_CATEGORIES = exports.FETCH_CATEGORIES = 'FETCH_CATEGORIES';
	var FETCH_SETTINGS = exports.FETCH_SETTINGS = 'FETCH_SETTINGS';
	var CREATE_SUBSCRIBER = exports.CREATE_SUBSCRIBER = 'CREATE_SUBSCRIBER';

	var host = window.location.host.split(':')[0];
	var ROOT_URL = exports.ROOT_URL = 'https://' + host + '/api/v1';

	var DEBUG = false;
	if (DEBUG) {
				exports.ROOT_URL = ROOT_URL = 'http://localhost/api/v1';
	}

	function updatePostBody(value) {
				return {
							type: 'UPDATE_POST_BODY',
							payload: value
				};
	}

	function updatePostTags(value) {
				return {
							type: 'UPDATE_POST_TAGS',
							payload: value
				};
	}

	function fetchPosts(filter) {
				var posts_url = ROOT_URL + '/posts/';
				var page_url = "";
				if (filter) {
							if (filter.currentPage) {
										page_url = "?page=" + filter.currentPage;
							}
							if (filter.category) {
										/* Posts filtered by category */
										posts_url = ROOT_URL + '/category/' + filter.category;
							}
							if (filter.tag) {
										/* Posts filtered by tag */
										posts_url = ROOT_URL + '/tag/' + filter.tag;
							}
				}
				var url = posts_url + page_url;
				/* console.log("Fetching posts"); */
				return function (dispatch) {
							_axios2.default.get(url).then(function (response) {
										dispatch({
													type: 'FETCH_POSTS',
													payload: response.data
										});
							});
				};
	}

	function fetchPost(slug) {
				/* console.log(">>>> src/actions/index.js:");
	    * console.log("Fetching post.");	    */

				return function (dispatch) {
							_axios2.default.get(ROOT_URL + '/post/' + slug + '/').then(function (response) {
										/* console.log("Successfully fetched post.");
	            console.log(response.data.body);*/

										dispatch({
													type: FETCH_POST,
													payload: response
										});
							});
				};
	}

	function createPost(post) {
				// Get the saved token from local storage
				var config = {
							headers: { authorization: 'Token ' + localStorage.getItem('token') }
				};

				return function (dispatch) {
							_axios2.default.post(ROOT_URL + '/post/new', post, config).then(function (response) {
										_reactRouter.browserHistory.push('/');
										/* console.log(response);*/
										dispatch({
													type: 'CREATE_POST',
													payload: post
										});
							});
				};
	}

	function updatePost(slug, post) {
				/* console.log(">>>> src/actions/index.js:");
	    * console.log("Getting a token from localStorage. ");	    */

				/* Get the saved token from local storage */
				var config = {
							headers: { authorization: 'Token ' + localStorage.getItem('token') }
				};

				/* console.log("Post Tags: " + post.tags);*/

				return function (dispatch) {
							_axios2.default.put(ROOT_URL + '/post/' + slug + '/', post, config).then(function (response) {
										/* console.log(">>>> src/actions/index.js (promise):");
	         console.log("Updated a post. Redirecting to it.");  */
										_reactRouter.browserHistory.push('/post/' + response.data.slug);
										/* console.log(response);*/
										dispatch({
													type: UPDATE_POST,
													payload: response
										});
							});
				};
	}

	function deletePost(slug) {
				/* console.log(">>>> src/actions/index.js:");
	    * console.log("Deleting post.");	    */

				var config = {
							headers: { authorization: 'Token ' + localStorage.getItem('token') }
				};

				return function (dispatch) {
							_axios2.default.delete(ROOT_URL + '/post/' + slug + '/', config).then(function (response) {
										console.log(">>>> src/actions/index.js (promise):");
										console.log("Successfully deleted post. Dispatching action DELETE_POST.");
										_reactRouter.browserHistory.push('/');
										dispatch({
													type: DELETE_POST,
													payload: response
										});
							});
				};
	}

	function fetchCategories() {
				return function (dispatch) {
							_axios2.default.get(ROOT_URL + '/categories/').then(function (response) {
										/* console.log("Categories fetched: " + response);*/
										dispatch({
													type: FETCH_CATEGORIES,
													payload: response
										});
							});
				};
	}

	function fetchSettings() {
				return function (dispatch) {
							_axios2.default.get(ROOT_URL + '/settings/').then(function (response) {
										/* console.log("Settings fetched: " + JSON.stringify(response));*/
										dispatch({
													type: FETCH_SETTINGS,
													payload: response
										});
							});
				};
	}

	function createSubscriber(props) {
				return function (dispatch) {
							_axios2.default.post(ROOT_URL + '/subscribe', props).then(function (response) {
										/* browserHistory.push('/');*/
										/* console.log(response);*/
										dispatch({
													type: CREATE_SUBSCRIBER,
													payload: response
										});
							});
				};
	}

	function subscribedClose() {
				return {
							type: 'SUBSCRIBED_CLOSE',
							payload: false
				};
	}

/***/ }

})