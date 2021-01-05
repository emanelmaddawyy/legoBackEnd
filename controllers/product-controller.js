const Product = require('../models/Product');

const products = async (req, res, next) => {
  const limit = parseInt(req.query.limit || Number.MAX_SAFE_INTEGER);
  const trending = req.query.trending;
  const sortBy = req.query.sortBy || 'createdAt';
  const sortOrder = req.query.sortOrder || 'desc';
  const search = req.query.searchKeyWord;

  console.log("PRODUCTS BODY: ", req.body);

  const query = {};
  if (trending !== undefined) {
    query.trending = trending;
  }
  const sortByObj = {};
  sortByObj[sortBy] = sortOrder;

  if (search) {
    query.title = {
      $regex: search,
      $options: 'i'
    };
  }

  try {
    const products = await Product.find(query).sort(sortByObj).limit(limit);

    res.send(products);
  } catch (error) {
    console.error(error)
    next(error)
  }
}

const getProductsFiltered = async (req, res, next) => {
  const limit = parseInt(req.query.limit || Number.MAX_SAFE_INTEGER);
  const filters = req.body;

  let query = {};
  
  if (filters && filters.length > 0) {
    query = {
      $and: filters.map(filterItem => {
        return {
          $or: filterItem.data.map(dataItem => {
            const obj = {};
            obj[filterItem.key] = dataItem;
            return obj;
          })
        }
      })
    }
  }

  try {
    const products = await Product.find(query).sort({
      createdAt: 'desc'
    }).limit(limit);

    res.send(products);
  } catch (error) {
    next(error)
  }
}

const getProductDetails = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id).populate('ageCategory');
    res.send(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  products,
  getProductDetails,
  getProductsFiltered
}