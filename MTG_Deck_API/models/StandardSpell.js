const mongoose = require('mongoose');

var StandardSpellSchema = mongoose.Schema({
	name 		: String,
	cmc 		: Number,
	colors  : [String], 
	w			 	: { type: Number, required: true, default: 0},
	u  			: { type: Number, required: true, default: 0},
	b 			: { type: Number, required: true, default: 0},
	r		 		: { type: Number, required: true, default: 0},
	g				: { type: Number, required: true, default: 0},
	c 			: { type: Number, required: true, default: 0},
	img_url : String
});

var StandardSpell = mongoose.model('StandardSpell', StandardSpellSchema);

module.exports = StandardSpell;