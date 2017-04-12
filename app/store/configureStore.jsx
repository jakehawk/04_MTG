import Redux from 'redux';

var configure = ()=> {
	var reducer = Redux.combineReducers({
		test: 'test'
	});

	var store = Redux.createStore(reducer, Redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}