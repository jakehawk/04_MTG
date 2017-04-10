var mongoose  = require('mongoose'),
    mtg       = require('mtgsdk'),
    Spell     = require('../models/StandardSpell');

var db = process.env.MONGODB_URI || 'mongodb://localhost/mtg-stuff-1';
mongoose.connect(db);

var spells = [];
var bannedSpells = ['Smuggler\'s Copter', 'Reflector Mage', 'Emrakul, the Promised End'];

function aoIndexOf(arr, search, prop) {
  for (var i = 0, len = arr.length; i < len; i ++) {
    if (arr[i][prop] === search) return i;
  }
  return -1;
}

// function to parse relevant information from mtgapi call
function getSpellInfo(spell) {
  console.log(spell);
  var colors = spell.manaCost.replace(/[{}]/g, '').split(''),
      w, u, b, r, g, c;
  for (var i = 0, len = colors.length; i < len; i++) {
    switch (colors[i]) {
      case 'W':
        w+=1;
        break;
      case 'U':
        u+=1;
        break;
      case 'B':
        b+=1;
        break;
      case 'R':
        r+=1;
        break;
      case 'G':
        g+=1;
        break;
      case 'C':
        c+=1;
        break;
    }
  }

  spells.push({
    name        : spell.name,
    colors      : spell.colorIdentity || [ 'C' ],
    cmc         : spell.cmc,
    superTypes  : spell.supertypes || '',
    types       : spell.types,
    subtypes    : spell.subtypes || '',
    img_url     : spell.imageUrl,
    power       : spell.power || '',
    tough       : spell.toughness || '',
    wCount      : w,
    uCount      : u,
    bCount      : b,
    rCount      : r,
    gCount      : g,
    cCount      : c
  });
}
console.log('outside of everything');
    mtg.card.where({ set: 'AER' })
      .then(cards => {
        for (var i = 0, len = cards.length; i < len; i++) {
          console.log(cards[i].name);
        }
      })
      console.log('other side');

Spell.remove({}, function(err) {
  if (err) throw err;
  console.log('Standard database is cleared.');
  console.log(spells);
  var waiting = true;
  // while (waiting) {
  //   console.log('waiting',spells)
  //   // mtg.card.all({ set: 'AER' })
  //   //   .on('data', card => {
  //   //     console.log('inside AER fetch');
  //   //     getSpellInfo(card);
  //   //     waiting = false;
  //   //   });
  // }
  Spell.create(spells, function(err, spells) {
    if (err) throw err
    console.log(`Database seeded with Standard Legal cards. Total of ${spells.length} cards.`)
    mongoose.connection.close()
    process.exit()
    });
})
































  
  // mtg.card.all({ set: 'KLD '})
  //   .on('data', spell => {
  //     if (spell.name !== bannedSpells[0])
  //       getSpellInfo(spell);
  //   });
  // mtg.card.all({ set: 'EMN'})
  //   .on('data', spell => {
  //     if (spell.name !== bannedSpells[2])
  //       getSpellInfo(spell);
  //   });
  // mtg.card.all({ set: 'SOI'})
  //   .on('data', spell => {
  //     getSpellInfo(spell);
  //   });
  // mtg.card.all({ set: 'OGW'})
  //   .on('data', spell => {
  //     if (spell.name !== bannedSpells[1])
  //       getSpellInfo(spell);
  //   });
  // mtg.card.all({ set: 'BFZ'})
  //   .on('data', spell => {
  //     getSpellInfo(spell);
  //   });