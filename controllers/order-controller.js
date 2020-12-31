const Order = require('../models/Order')

const makeOrder = async (req, res, next) => {
  const orderDetails = req.body;

  // validate body
  if (!orderDetails.user || !orderDetails.products) {
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  // save order
  try {
    const myData = new Order(req.body);
    const newOrder = await myData.save();

    res.status(201).send(newOrder);
  } catch (error) {
    next(error);
  }
}

const getOrders = async (req, res, next) => {
  const userId = req.query.userId;

  try {
    const orders = await Order.find({
        user: userId
      }).sort({
        createdAt: 'DESC'
      })
      .populate({
        path: 'user',
        populate: {
          path: 'country'
        },
        select: ['_id', 'email', 'country']
      })
      .populate('products.productData');

    res.send(orders);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  makeOrder,
  getOrders
}