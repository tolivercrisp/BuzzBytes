const { connect, connection } = require('mongoose');

connect('mongodb://localhost/buzz_bytesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
