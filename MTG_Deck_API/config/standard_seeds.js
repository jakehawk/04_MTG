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

mtg.card.all({ set: 'AER'})
  .on('data' spell => {
    var colors = spell.manaCost.replace(/[{}]/g, '');
    var img_url = spell.imageUrl;
    var w, u, b, r, g, c;
    for (var i = 0, len = colors.length; i < len; i++) {
      switch colors[i] {
        case 'W':
          w++;
          break;
        case 'U':
          u++;
          break;
        case 'B':
          b++;
          break;
        case 'R':
          r++;
          break;
        case 'G':
          g++;
          break;
        case 'C':
          c++;
          break;
      }
    }

    spells.push({
      name    : spell.name,
      cmc     : spell.cmc,
      colors  : spell.colors,

    });
  });
mtg.card.all({ set: 'KLD'})
  .on('data' spell => {
    if (card.name !== bannedSpells[0])
      spells.push(spell);
  });
mtg.card.all({ set: 'EMN'})
  .on('data' spell => {
    if (card.name !== bannedSpells[2])
      spells.push(spell);
  });
mtg.card.all({ set: 'SOI'})
  .on('data' spell => {
    spells.push(spell);
  });
mtg.card.all({ set: 'OGW'})
  .on('data' spell => {
    if (card.name !== bannedSpells[1])
      spells.push(spell);
  });
mtg.card.all({ set: 'BFZ'})
  .on('data' spell => {
    spells.push(spell);
  });

Spell.remove({}, function(err) {
  if (err) throw err
  Spell.create(spells, function(err, spells) {
    if (err) throw err
    console.log(`Database seeded with ${spells.length} beans.`)
    mongoose.connection.close()
    process.exit()
    })
})