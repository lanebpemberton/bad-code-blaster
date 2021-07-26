const mongoose = require('mongoose');

const database = process.env.MONGODB_URI || 'mongodb+srv://root:forum007bcb2021@cluster0.c44k2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
