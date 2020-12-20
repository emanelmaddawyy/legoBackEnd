const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  }],
  totalPrice: {
    type: Number
  }
}, {
  timestamps: true
});

const Order = mongoose.model('orders', schema);

module.exports = Order;