import Redux, {createStore, combineReducers} from 'redux';
import {decksReducer} from 'reducers';

export var configure = ()=> {
	console.log('testing b4');
	var reducer = Redux.combineReducers({
		decks: decksReducer
	});
	console.log(reducer);
	var store = Redux.createStore(reducer, Redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}