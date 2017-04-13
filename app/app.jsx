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
import MTGAPI from 'MTGAPI';
// import actions from 'actions';
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
	var state = store.getState();
	console.log('New state', state);
	// store.dispatch(actions.addDecks(initialDecks));
});

var initialDecks = MTGAPI.getDecks();

console.log(actions);
store.dispatch(actions.startAddDecks());
console.log('test');
// console.log(initialDecks);
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
