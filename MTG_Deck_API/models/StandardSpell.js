const mongoose = require('mongoose');

var StandardSpellSchema = mongoose.Schema({
	name 		: String,
	cmc 		: Number,
	colors  : [String], 
	w			 	: Number,
	u  			: Number,
	b 			: Number,
	r		 		: Number,
	g				: Number,
	c 			: Number,
	img_url : String
});

var StandardSpell = mongoose.model('StandardSpell', StandardSpellSchema);

module.exports = StandardSpell;