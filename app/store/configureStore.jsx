import Redux, {createStore, combineReducers} from 'redux';
import {decksReducer, testingReducer} from 'reducers';

export var configure = ()=> {
	console.log(decksReducer);
	var reducer = Redux.combineReducers({
		decks: decksReducer,
		tests: testingReducer
	});
	console.log(reducer);
	var store = Redux.createStore(reducer, Redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}