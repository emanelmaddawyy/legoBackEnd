const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountriesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Countries = mongoose.model('countries', CountriesSchema);

module.exports = Countries;