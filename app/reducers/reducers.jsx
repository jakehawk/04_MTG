export var decksReducer = (state = [], action)=> {
	switch(action.type) {
		case 'ADD_DECKS':
			return [
				...state,
				...action.decks
			];
		default:
			return state;
	}
};