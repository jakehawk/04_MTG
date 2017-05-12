import React from 'react';
import * as Redux from 'react-redux';

import MTGAPI from 'MTGAPI';
import DeckList from 'DeckList';
import Nav from 'Nav';
import $ from 'jquery';

export class DeckApp extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<h1 className="page-title">MTG Decks</h1>

				<div className="row">
					<div className="column small-centered small-10 medium-8 large-6">
						<div className="container">
							<DeckList />
						</div>
					</div>
				</div>

			</div>
		);
	};
};

export default Redux.connect()(DeckApp);