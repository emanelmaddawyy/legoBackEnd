const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscribeSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Subscribe = mongoose.model('subscribes', SubscribeSchema);

module.exports = Subscribe;