import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import actions from 'actions';

import Foundation from 'react-foundation';

import Spell from 'Spell';

export class DeckSummary extends React.Component {
	render () {
		var {
					id,
					name,
					format,
					spells
				} = this.props;

		var creatures 		= [],
				instants 			= [],
				sorceries 		= [],
				artifacts 		= [],
				enchantments 	= [],
				lands 				= [],
				colors 				= [];

		// console.log(spells);

		spells.forEach((spell)=> {
			var types = spell.types;

			// Splitting spells into categories
			if (types.includes('Land')) {
				lands.push(spell)

				// Checking for the deck's colors
				spell.colors.forEach((color)=> {
					if (!colors.includes(color)) colors.push(color);
				});
			} else if (types.includes('Creature')) {
				creatures.push(spell);
			} else if (types.includes('Instant')) {
				instants.push(spell);
			} else if (types.includes('Sorcery')) {
				sorceries.push(spell);
			} else if (types.includes('Artifact')) {
				artifacts.push(spell);
			} else if (types.includes('Enchantment')) {
				enchantments.push(spell);
			}
		});

		// console.log('Creatures:', creatures.length);

		// Render just creatures
		var renderSpell = (cardType)=> {
			console.log('inside render',cardType);
			if (cardType.length > 0) {
				return cardType.map((spell)=> {
					return (
						<Spell key={spell._id} {...spell}/>
					);
				});
			} else {
				return (
					<p>old stuff</p>
				)
			}
		};

		return (
			<div className="deck" >
				<div className="row">
					<h3>{name}</h3>
					<Row className="display">
						<Column small={8} large={7} >
							<div>
								<h4>Creatures</h4>
								{renderSpell(creatures)}
							</div>
							<div>
								<h4>Instants</h4>
								{renderSpell(instants)}
							</div>
						</Column>
					</Row>
				</div>
			</div>
		);
	};
};

export default connect(
	(state)=> {
		return state;
	}
)(DeckSummary);