const Mongoose = require('mongoose');

Mongoose.connection.on('error', (err) => {
  console.error(err); // eslint-disable-line no-console
});

Mongoose.connection.on('connected', () => {
  console.log('Mongo DB is connected'); // eslint-disable-line no-console
});

function connectToDB() {
  Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connectToDB,
};
