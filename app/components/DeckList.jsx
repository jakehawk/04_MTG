import React from 'react';
import {connect} from 'react-redux';

import MTGAPI from 'MTGAPI';
import Deck from 'Deck';
import $ from 'jquery';

export class DeckList extends React.Component {
	render() {
		var decks = MTGAPI.getDecks();

		var renderDecks = ()=> {
			if ($.isArray(decks)){
				return decks.map((deck)=> {
					<Deck key={deck.id} {...deck}/>
				});
			} else {
				return <p>pls wait</p>
			}
		};

		return (
			<div>
				{renderDecks()}
			</div>
		);
	};
};

export default connect(
	(state)=> {
		return state;
	}
)(DeckList);