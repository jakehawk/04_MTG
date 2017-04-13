import axios from 'axios';

const GET_DECKS_URL = 'http://mtg-deck-api.herokuapp.com/api/decks';

export var addDecks = (decks)=> {
	return {
		type: 'ADD_DECKS',
		decks
	};
};

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
// export var startIndexRecipes = (recipes) => {
//     return (dispatch, getState) => {
//         var recipes

//         $.get(URL + '/recipes', (response) => {
//             recipes = response
//             dispatch(indexRecipes(recipes))
//         })
//     }
// }


// module.exports = {
// 	getDecks: function () {
// 		var requestUrl = GET_DECKS_URL;

// 		return axios
// 			.get(requestUrl)
// 			.then((res)=> {
// 				if (res.data.decks)
// 					return res.data.decks;
// 				else
// 					return res.json('u r bad');
// 			}, (res)=> {
// 				throw new Error(res.data.message);
// 			});
// 	}
// }