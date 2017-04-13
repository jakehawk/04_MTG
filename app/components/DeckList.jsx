import React from 'react';
import {connect} from 'react-redux';

import MTGAPI from 'MTGAPI';
import DeckSummary from 'DeckSummary';
import $ from 'jquery';

export class DeckList extends React.Component {
	render() {
		var {decks} = this.props;
		console.log(decks);

		var renderDecks = ()=> {
			if (decks.length === 0){
				return <p>pls wait</p>
			} else {
				return decks.map((deck)=> {
					return (
						<DeckSummary key={deck._id} {...deck}/>
					);
				});
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