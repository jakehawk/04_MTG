import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import actions from 'actions';

export class Deck extends React.Component {
	render () {
		var {
					id,
					name,
					format,
					colors
				} = this.props;

		return (
			<div>
				<p>{name}</p>
				<p>{format}</p>
			</div>
		);
	};
};

export default connect()(Deck);