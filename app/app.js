const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, browserHistory} = require('react-router');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Example = require('Example');

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!appSass');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
