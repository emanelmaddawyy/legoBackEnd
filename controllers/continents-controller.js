const Continent = require('../models/Continent');

const getContinents = async (req, res, next) => {
  try {
    const continents = await Continent.find();
    res.send(continents);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getContinents
}