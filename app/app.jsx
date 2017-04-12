import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
			 	Route, 
			 	Router, 
			 	IndexRoute, 
			 	hashHistory
			 } from 'react-router';

import DeckApp from 'DeckApp';

var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  	<DeckApp/>
  </Provider>,
  document.getElementById('app')
);
