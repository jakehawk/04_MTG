import React from 'react';
import * as Redux from 'react-redux';

import DeckList from 'DeckList';

class DeckApp extends React.Component {
	render () {
		return (
			<div>
				<h1>Welcome Msg</h1>
			</div>
		);
	}
}

export default Redux.connect()(DeckApp);