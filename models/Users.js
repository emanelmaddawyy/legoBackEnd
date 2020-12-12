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
  }
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;