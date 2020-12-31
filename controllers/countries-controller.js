const Countries = require('../models/Countries');


const countries = async (req, res, next) =>{
  try {
    const countries = await Countries.find();
    res.send(countries);
  } catch (error) {
    next(error)
  }
}
module.exports = {countries}