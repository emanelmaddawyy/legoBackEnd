const Product = require('../models/Product');
const Category = require('../models/Category');
const ProductType = require('../models/ProductType');
const Age = require('../models/Age');
const Price = require('../models/Price');
const Theme = require('../models/Themes');
const Interest = require('../models/Interest');

const getShopByFilters = async (req, res, next) => {
  try {
    const productTypes = await ProductType.find();
    const prices = await Price.find();
    const ages = await Age.find();

    res.send([
      {
        title: 'Product Types',
        key: 'productType',
        data: productTypes
      },
      {
        title: 'Ages',
        key: 'ageCategory',
        data: ages
      },
      {
        title: 'Prices',
        key: 'priceCategory',
        data: prices
      }
    ]);
  } catch(e) {
    next(e);
  }
}

// getProductFilters api
const getProductFilters = async (req, res, next) => {
  try {
    const productTypes = await ProductType.find();
    const prices = await Price.find();
    const ages = await Age.find();
    const themes = await Theme.find();
    const interests = await Interest.find();

    res.send([
      {
        title: 'Product Types',
        key: 'productType',
        data: productTypes
      },
      {
        title: 'Ages',
        key: 'ageCategory',
        data: ages
      },
      {
        title: 'Prices',
        key: 'priceCategory',
        data: prices
      },
      {
        title: 'Themes',
        key: 'theme',
        data: themes
      },
      {
        title: 'Interests',
        key: 'interest',
        data: interests
      }
    ]);
  } catch(e) {
    next(e);
  }
}

module.exports = {
  getShopByFilters,
  getProductFilters
}