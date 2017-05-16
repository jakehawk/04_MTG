import React from 'react';
import {connect} from 'react-redux';
import actions from 'actions';

export class Spell extends React.Component {
	render () {
		var {
					id,
					name,
					img_url,
					qty
				} = this.props;

		var minName = (name.length > 8) ? name.substring(0,8) + '...' : name;

		return (
			<p>{qty}x {name}</p>
		)
	}
}

export default connect()(Spell);
			// <div className="column small-left small-4 flex">
			// 	<img 	src={img_url} 
			// 				alt="card-image"/>
			// </div>