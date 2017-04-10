const mongoose 			= require('mongoose'),
			StandardSpell = require('./StandardSpell');

var DeckSchema = new mongoose.Schema({
	name 			: String,
	format 		: String,
	colors 		: [String],
	spell 		: [
		{
			info 	: {type: mongoose.Schema.Types.ObjectId, ref: 'StandardSpell'},
			qty 	: Number
		}
	]
});

var Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;