import React from 'react';
import * as Redux from 'react-redux';

import MTGAPI from 'MTGAPI';
import DeckList from 'DeckList';
import $ from 'jquery';

export class DeckApp extends React.Component {
	render() {
		return (
			<div>
				<DeckList/>
			</div>
		);
	};
};

export default Redux.connect()(DeckApp);