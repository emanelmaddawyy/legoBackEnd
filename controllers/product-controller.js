const Product = require('../models/Product');

const products = async (req, res, next) => {
  const limit = parseInt(req.query.limit || Number.MAX_SAFE_INTEGER);
  const trending = req.query.trending;
  const sortBy = req.query.sortBy || 'createdAt';
  const sortOrder = req.query.sortOrder || 'desc';

  const query = {};
  if (trending !== undefined) {
    query.trending = trending;
  }
  const sortByObj = {};
  sortByObj[sortBy] = sortOrder;

  try {
    const products = await Product.find(query).sort(sortByObj).limit(limit);

    res.send(products);
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getProductDetails = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  products,
  getProductDetails
}