const React =require('react');
const ReactDOM =require('react-dom');
const {Provider} =require('react-redux');
const {
			 	Route, 
			 	Router, 
			 	IndexRoute, 
			 	hashHistory
			 } = require('react-router');

import DeckApp from 'DeckApp';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
