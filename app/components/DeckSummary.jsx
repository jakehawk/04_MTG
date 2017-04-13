import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import actions from 'actions';

export class DeckSummary extends React.Component {
	render () {
		var {
					id,
					name,
					format,
					spells
				} = this.props;



		return (
			<div className="deck">
				<p>{name} - {format}</p>
				<p className="deck__subtext">Has {spells.length}</p>

			</div>
		);
	};
};

export default connect()(DeckSummary);