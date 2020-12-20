const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  visibleId: {
    type: String,
    required: true,
    unique: true
  },
  image: String
}, {
  timestamps: true
});

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  visibleId: {
    type: String,
    required: true,
    unique: true
  },
  displayForShopByFilter: Boolean,
  subCategories: [
    {
      type: subCategorySchema
    }
  ]
}, {
  timestamps: true
});

const Category = mongoose.model('categories', schema);

module.exports = Category;