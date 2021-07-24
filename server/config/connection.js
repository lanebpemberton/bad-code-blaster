const mongoose = require('mongoose');

const database = process.env.MONGODB_URI || 'mongodb://localhost/bcbdb'

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
