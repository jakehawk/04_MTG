import axios from 'axios';

const URL = 'http://mtg-deck-api.herokuapp.com/api';

// Function handles api call
export var startAddDecks = (decks)=> {
	return (dispatch, getState)=> {
		var decks,
				requestUrl = URL + '/decks';

		return axios
			.get(requestUrl)
			.then((res)=> {
				if (res.data.decks){
					decks = res.data.decks;
					dispatch(addDecks(decks));
				}
			}, (res)=> {
				throw new Error(res.data.message);
			});
	};
};

// Once api call finishes this runs
export var addDecks = (decks)=> {
	return {
		type: 'ADD_DECKS',
		decks
	};
};

// Redirect to view another deck
export var showDeck = (deck)=> {
	return {
		type: 'SHOW_DECK',
		deck
	};
};

// Sign up
export var startSignup = (newUser)=> {
	return (dispatch, getState)=> {
		$.post(URL + '/users', newUser, (res)=> {
			if (res.success) {
				// creating a token upon success
				var token = res.token;

				// retrieve user information
				$.post(URL + '/me', { token: token }, (finalRes)=> {
					if (finalRes.success)
						dispatch(login(token, finalRes.user));
					else
						dispatch(failedLogin(finalRes.error));
				});
			} else {
				dispatch(failedSignup(res.error));
			}
		});
	}
};

export var failedSignup = (errors)=> {
	return {
		type 					: 'FAILED_SIGNUP',
		authenticated : false,
		errors 				: errors
	};
};

export var startLogin = (credentials)=> {
	return (dispatch, getState)=> {
		$.post(URL + '')
	}
}