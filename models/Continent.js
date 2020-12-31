const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  }
});

const continentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  branches: [{
    type: branchSchema
  }]
});

const Continent = mongoose.model('continents', continentSchema);

module.exports = Continent;