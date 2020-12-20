const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});

const Product = mongoose.model('products', schema);

module.exports = Product;