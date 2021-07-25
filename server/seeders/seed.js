const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bcbdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


const ship1 = [{
    ship_name: 'Code Blaster',
    speed: 1,
    hull_strength: 3,
    ship_description: 'A basic flyer equipped with simple weaponry and average thrusters.',
    sprite: '../images/ship1.png', //no actual image yet
    width: 45, //dimensions used in current frontend-dev branch
    height: 31,
}];

const user1 = [{
    username: 'admin',
    email: 'admin@badcodeblaster.com',
    password: 'Spectre007',
    highscores: [],
}];

db.Highscore.deleteMany({}).then((db.User.deleteMany({}))).then((db.Ship.deleteMany({})))
    .then(() => db.Ship.collection.insertMany(ship1))
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