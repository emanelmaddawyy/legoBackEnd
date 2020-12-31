const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  visibleId: {
    type: String,
    required: true,
    unique: true
  },
  imgSrc:{
    type:String,
    
  }
}, {
  timestamps: true
});

const Interest = mongoose.model('interest', InterestSchema);

module.exports = Interest;