var mongoose  = require('mongoose'),
    mtg       = require('mtgsdk'),
    Spell     = require('../models/StandardSpell');

var db = process.env.MONGODB_URI || 'mongodb://localhost/mtg-stuff-1';
mongoose.connect(db);

var spells = [];

mtg.card.all({ set: 'AER'})
  .on('data' spell => {
    spells.push(spell);
  });



Bean.remove({}, function(err) {
  if (err) throw err
  Bean.create(beans, function(err, beans) {
    if (err) throw err
    console.log(`Database seeded with ${beans.length} beans.`)
    mongoose.connection.close()
    process.exit()
    })
})