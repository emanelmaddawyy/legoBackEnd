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

const ProductType = mongoose.model('productTypes', schema);

module.exports = ProductType;