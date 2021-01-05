const Order = require('../models/Order')

const makeOrder = async (req, res, next) => {
  const orderDetails = req.body;

  // validate body
  if (!orderDetails.user || !orderDetails.products ) {
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  orderDetails.status = "Pending";

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
  const query = userId ? { user: userId } : {};

  try {
    const orders = await Order.find(query).sort({
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

const updateOrderStatus = async (req, res, next) => {
  const orderDetails = req.body;

  // validate body
  if (!orderDetails._id || !orderDetails.status ) {
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  // save order
  try {
    await Order.updateOne({_id: orderDetails._id}, {status: orderDetails.status});

    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  makeOrder,
  getOrders,
  updateOrderStatus
}