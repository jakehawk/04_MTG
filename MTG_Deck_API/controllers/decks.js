var Deck = require('../models/Deck');
var StandardSpell = require('../models/StandardSpell');

function indexOfObject (arr, search, side) {
	for (var i = 0, len = arr.length; i < len; i++){
		if (String(arr[i].info) == search && String(arr[i].side) === side) return i;
	}

	return -1;
}

// GET - INDEX all decks =========================================================
module.exports.getAll = (req, res)=> {
	Deck.find((err, decks)=> {
		if (err) res.json({ message: 'Could not find any decks'});

		res.json({ decks: decks});
	}).select('-__v');
};
// ===============================================================================

// POST - CREATE a new deck ======================================================
module.exports.createDeck = (req, res)=> {
	var deck = new Deck(req.body);
	console.log(deck);
	deck.save((err)=> {
		if (err) res.json({ message: `Could not create deck b/c: ${error}`});

		res.json({ deck: deck });
	});
};
// ===============================================================================

// GET - SHOW a deck =============================================================
module.exports.getDeck = (req, res)=> {
	var id = req.params.id;

	Deck.findById({_id: id}, (err, deck)=> {
		if (err) res.json({ message: `Could not find criminal b/c: ${err}`});

		res.json({ deck: deck});
	}).select('-__v');
};
// ===============================================================================

// PATCH - UPDATE a deck =========================================================
module.exports.updateDeck = (req, res)=> {
	var id 		= req.params.id,
			name 	= req.body.name,
			qty 	= req.body.qty,
			side 	= req.body.side || false;

	console.log('name:', name);

	Deck.findById({_id: id}, (err, deck)=> {
		if (err) res.json({ message: `Could not find deck b/c: ${err}`});
		
		StandardSpell.find({name: name}, (err, spells)=> {
			if (err) res.json({message: `Could not find spell b/c: ${err}`})

			var spell = {
				info 	: spells[0]._id,
				qty 	: qty,
				side 	: side
			};

			console.log('qty', qty)
			if (!req.body.update && spell.qty){
				console.log(spells)
				deck.spells.push(spell);
				console.log(deck.spells);
				deck.save( (err)=> {
					if (err) res.json({ message: `Could not add spell bc: ${err}`});

					res.json(deck);
				});
			} else if (qty == 0){
				console.log('delete')
				var index = indexOfObject(deck.spells, spell.info, spell.side);
				console.log('index', index);
				deck.spells.splice(index, 1);
				deck.save( (err)=> {
					if (err) res.json({ message: `Could not update deck b/c: ${err}`})
				})
			} else {
				console.log('update qty')
				var index = indexOfObject(deck.spells, spell.info, spell.side);
				console.log('index', index);
				deck.spells[index].qty = qty;
				deck.spells[index].side = side;
				deck.save( (err)=> {
					if (err) res.json({ message: `Could not update spell b/c: ${err}`});

					res.json(deck.spells[index]);
				})
			}
		});
	});
};
// ===============================================================================

























