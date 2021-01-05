const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true

  },
  password: {
    type: String,
    required: true,
  },
  birthDate:{
    type: String
  },
  country: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'countries',
    required:true
  },
  resetCode: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;