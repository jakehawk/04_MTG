import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import { Link, IndexLink } from 'react-router';

export var Nav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/sign-up">Sign-up</Link>
			</div>
		);
	}
});

export default Redux.connect()(Nav);