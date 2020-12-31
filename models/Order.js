const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderProductSchema = new Schema({
  price: Number,
  count: Number,
  productData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  }
});

const schema = new Schema({
  products: [{
    type: orderProductSchema
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
}, {
  timestamps: true
});

const Order = mongoose.model('orders', schema);

module.exports = Order;