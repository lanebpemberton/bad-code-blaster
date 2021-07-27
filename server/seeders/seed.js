require('dotenv').config()
const { ProvidedRequiredArgumentsOnDirectivesRule } = require('graphql/validation/rules/ProvidedRequiredArgumentsRule');
const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bcbdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const shipList = require('../seeders/ships.json');
const user1 = [{
    username: 'admin',
    email: 'admin@badcodeblaster.com',
    password: 'Spectre007',
    highscores: [],
}];
 

db.Highscore.deleteMany({}).then((db.User.deleteMany({}))).then((db.Ship.deleteMany({})))
    .then(() => db.Ship.collection.insertMany(shipList))
    .then((data) => {
        console.log(data.result.n + ' ship records inserted.')
    })
    .catch((err) => {
        console.error(err)
    })
    .then(() => db.User.collection.insertMany(user1))
    .then((data) => {
        console.log(data.result.n + ' user records inserted.')
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

// var shipping = Shipss.shipList
// var done = 0

// for (var i= 0; i < shipping.length; i++) {
//     shipping[i].save(function(err, result) {
//         done++;
//         if (done === shipping.length) {
//             exit();
//         }
//     });
// }
// function exit() {
// mongoose.disconnect();
// }