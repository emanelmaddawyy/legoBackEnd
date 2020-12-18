const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThemesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Themes = mongoose.model('themes', ThemesSchema);

module.exports = Themes;