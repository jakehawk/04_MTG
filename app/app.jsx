import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
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
