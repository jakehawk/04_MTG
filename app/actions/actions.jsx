import axios from 'axios';

const GET_DECKS_URL = 'http://mtg-deck-api.herokuapp.com/api/decks';

// Function handles api call
export var startAddDecks = (decks)=> {
	return (dispatch, getState)=> {
		var decks,
				requestUrl = GET_DECKS_URL;

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
		axios
	}
}