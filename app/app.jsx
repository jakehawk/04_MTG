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
import Nav from 'Nav';

import Signup from 'Signup';

import MTGAPI from 'MTGAPI';

// import actions from 'actions';
var actions = require('actions');
var store = require('configureStore').configure();

// var initialDecks = MTGAPI.getDecks();

// console.log(actions);
store.dispatch(actions.startAddDecks());
// console.log('test');
// console.log(initialDecks);
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path="/">
  			<IndexRoute component={DeckApp}/>
        <Route path="sign-up" component={Signup} />
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('app')
);
