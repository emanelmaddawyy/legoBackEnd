const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String
  },
  price: {
    type: Number
  },
  rating: {
    type: Number
  },
  images: {
    type: Array
  },
  trending: {
    type: Boolean,
    default: false
  },
  spotlight: {
    type: Boolean,
    default: false
  },
  numberOfProduct: {
    type: Number
  },
  avaliable: {
    type: Boolean,
    default: false
  },
  itemNo: Number,
  vipPoints: Number,
  pieces: Number,
  age: Number,
  numberOfReviews: Number,
  theme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'themes',
    required: true
  },
  interest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'interest',
    required: true
  },
  itemNo: Number,
  productType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'productTypes'
  },
  ageCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ages'
  },
  priceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'prices',
  },
}, {
  timestamps: true
});

const Product = mongoose.model('products', schema);

module.exports = Product;