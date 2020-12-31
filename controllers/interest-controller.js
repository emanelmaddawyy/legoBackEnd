const Interest = require('../models/Interest');
const Product = require('../models/Product');

const interest = async(req, res, next)=> {
  try {
    const interest = await Interest.find();
    res.send(interest);
  } catch (error) {
    next(error)
  }
}

const getInterestProducts = async (req, res, next) => {
  const interestVisibleId = req.params.visibleId;
  try {
    // get interest
    const interest = await Interest.findOne({
      visibleId: interestVisibleId
    });

    // validate interest
    if (!interest) {
      res.status(404).send({
        message: "interest not found"
      });
      return;
    }

    // get products of this interest
    const products = await Product.find({
      interest: interest._id
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  interest,
  getInterestProducts
}