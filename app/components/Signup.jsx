import React from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router';

import * as actions from 'actions';

export const Signup = React.createClass({
	onSignup: function(evt) {
		var {dispatch} = this.props;
		evt.preventDefault();

		var newUser = {
			email 		: this.refs.email.value.trim(),
			name 			: this.refs.name.value.trim(),
			password 	: this.refs.password.value.trim()
		};

		dispatch(actions.startSignup(newUser));
	},
	render: function() {
		return (
			<div className="signup-form">
				<Link className="menu-link" to="/">Menu</Link>
				<form onSubmit={this.onSignup}>
					<h3>Sign Up</h3>

					<div>
						<label>Username:</label>
						<input type="text" ref="name"/>
					</div>

					<div>
						<label>Email:</label>
						<input type="text" ref="name"/>
					</div>

					<div>
						<label>Password:</label>
						<input type="text" ref="name"/>
					</div>
					
					<hr/>

					<input type="submit"/>
				</form>
			</div>
		)
	}
});

export default Redux.connect()(Signup);