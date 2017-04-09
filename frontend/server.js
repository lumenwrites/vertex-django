var Express = require('express');
var React = require('react');

var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var renderToString = require('react-dom/server').renderToString;

/* import counterServer from './reducers'*/
/* import Server from './containers/Server'*/

const server = new Express()
const port = process.env.PORT || 3000


function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(counterApp)

    // Render the component to a string
    const html = renderToString(
	<Provider store={store}>
	    <App />
	</Provider>
    )

    // Grab the initial state from our Redux store
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

server.get('/',function(req,res){
    /* Grab root component and create react app*/
    var app = React.createFactory(require('./src/components/Main.js'));
    /* Pass props to the app, and generate html out of it */
    var generated = React.renderToString(app({postList:""}));
    /* Take the html template, and insert generated html where it should be  */
    res.render('./index.ejs',{reactOutput:generated});    
});

/* Serve all the static files I need */
server.use(Express.static(__dirname));

server.listen(port, function(){
    console.log("Server running on port " + port);
})
