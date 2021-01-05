const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThemesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  visibleId: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const Themes = mongoose.model('themes', ThemesSchema);

module.exports = Themes;