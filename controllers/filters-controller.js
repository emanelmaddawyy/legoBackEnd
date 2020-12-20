const Product = require('../models/Product');
const Category = require('../models/Category');

const getShopByFilters = async (req, res, next) => {
  // init filters arr
  const filters = [];

  // get top 3 new products
  const newProducts = await Product.find().sort({
    createdAt: 'desc'
  }).limit(3);

  // add new filter
  filters.push({
    title: "New",
    items: newProducts,
    type: 'product',
    hasMore: true,
    url: '/new'
  });

  // select shop by categories
  const categories = await Category.find({
    displayForShopByFilter: true
  });

  console.log('categories: ', categories);

  categories.forEach(category => filters.push({
    title: category.title,
    items: category.subCategories,
    type: 'category',
    hasMore: false,
    url: null
  }))

  res.send(filters);
}

module.exports = {
  getShopByFilters
}