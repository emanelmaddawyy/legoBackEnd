const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String
}, {
  timestamps: true
});

const Age = mongoose.model('ages', schema);

module.exports = Age;