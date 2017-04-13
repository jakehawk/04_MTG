import * as redux from 'redux';
import thunk from 'redux-thunk';

import {decksReducer, testingReducer} from 'reducers';

export var configure = (initialState = {})=> {
	var reducer = redux.combineReducers({
		decks: decksReducer,
		tests: testingReducer
	});

	// Creates store to be used
	// Also applies thunk for async calls and redux dev tools
	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}