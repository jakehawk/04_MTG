import * as redux from 'redux';

import {decksReducer, testingReducer} from 'reducers';

export var configure = ()=> {
	var reducer = redux.combineReducers({
		decks: decksReducer,
		tests: testingReducer
	});
	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}