export var decksReducer = (state = [], action)=> {
	switch (action.type) {
		case 'ADD_DECKS':
			return [
				...state,
				...action.decks
			];
		default:
			return state;
	};
};

export var authReducer = (state = {}, action)=> {
	switch (action.type) {
		case 'LOGIN':
			return {
				authenticated : action.authenticated,
				token 				: action.token,
				handle 				: action.name,
				email					: action.email
			}
		case 'FAILED_SIGNUP':
			return { errors: action.errors }
		case 'FAILED_LOGIN':
			return { errors: action.errors }
		case 'LOGOUT':
			return {}
		default:
			return state
	}
}

// export var showDeckReducer = (state = '', action)=> {
// 	switch(action.type) {
// 		case 'SHOW_DECK':
		
// 	}
// }

export var testingReducer = (state = 'nope', action)=> {
	switch (action.type) {
		case 'FUCK':
			return [
				...state
			];
		default:
			return state;
	};
};