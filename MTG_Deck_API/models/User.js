const mongoose = require('mongoose');

var Deck = require('./Deck');

var UserSchema = new mongoose.Schema({
	email : { type: String, required: true, unique: true },
	name 	: { type: String, required: true },
	decks : [Deck.schema]
});

UserSchema.plugin(require('mongoose-bcrypt'));

UserSchema.options.toJSON = {
	transform : (document, returnedObject, options)=> {
		delete returnedObject.password;
		return returnedObject;
	}
};

var User = mongoose.model('User', UserSchema);

module.exports = User;