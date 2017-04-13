import React from 'react';
import * as Redux from 'react-redux';

import MTGAPI from 'MTGAPI';
import DeckList from 'DeckList';
import Deck from 'Deck';

class DeckApp extends React.Component {
	render () {
		var renderDecks = ()=> {
			return MTGAPI.getDecks().map((deck)=> {
				<Deck key={deck.id} {...deck}/>
			});
		};

		return (
			<div>
				{renderDecks()}
			</div>
		);
	}
}

export default Redux.connect()(DeckApp);