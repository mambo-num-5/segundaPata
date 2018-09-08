const mongoose = require('mongoose');

// connection to heroku
// const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
// mongoose.createConnection('mongodb://user:pass@localhost:port/database');
mongoose.connect('mongodb://127.0.0.1:27017/segundaPata');

// mongoose.connect(uri);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (error) => {
  console.log('Connection error:', error);
});

module.exports = db;
