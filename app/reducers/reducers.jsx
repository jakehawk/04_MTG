export var decksReducer = (state = [], action)=> {
	switch(action.type) {
		case 'ADD_DECKS':
			return [
				...state,
				...action.decks
			];
		default:
			return state;
	};
};

// export var showDeckReducer = (state = '', action)=> {
// 	switch(action.type) {
// 		case 'SHOW_DECK':
		
// 	}
// }

export var testingReducer = (state = 'nope', action)=> {
	switch(action.type) {
		case 'FUCK':
			return [
				...state
			];
		default:
			return state;
	};
};