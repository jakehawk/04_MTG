var Deck = require('../models/Deck');

// GET - INDEX all decks ====================================================
module.exports.getAll = (req, res)=> {
	Deck.find((err, decks)=> {
		if(err) res.json({ message: 'Could not find any decks'});

		res.json({ decks: decks})
	}).select('-__v');
};
// ==========================================================================

// POST - CREATE a new deck =================================================
module.exports.createDeck = (req, res)=> {
	var deck = new Deck(req.body);

	deck.save((err)=> {
		if (err) res.json({ message: `Could not create deck b/c: ${error}`});

		res.json({ deck: deck });
	});
};
// ==========================================================================

// GET - SHOW a deck ========================================================
module.exports.getDeck = (req, res)=> {
	var id = req.params.id;

	Deck.findById({_id: id}, (err, deck)=> {
		if (err) res.json({ message: `Could not find criminal b/c: ${err}`});

		res.json({ deck: deck});
	}).select('-__v');
};
// ==========================================================================

// PATCH - UPDATE a deck ====================================================
module.exports.updateDeck = (req, res)=> {
	var id = req.params.id;

	Deck.findById({_id: id}, (err, deck) {
		if (err) res.json({ message: `Could not find deck b/c: ${err}`});

		if (req.body.name)
	});
}

























