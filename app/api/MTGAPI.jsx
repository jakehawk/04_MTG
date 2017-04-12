import $ from 'jquery';
import axios from 'axios';

const GET_DECKS_URL = 'http://mtg-deck-api.herokuapp.com/api/decks';

module.exports = {
	getDecks: function () {
		var requestUrl = GET_DECKS_URL;

		return axios
			.get(requestUrl)
			.then((res)=> {
				if (res.data.decks)
					return res.data.decks;
				else
					return res.json('u r bad');
			}, (res)=> {
				throw new Error(res.data.message);
			});
	}
}