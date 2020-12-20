const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = (plainPassword) => {
  return bcrypt.hash(plainPassword, saltRounds);
}

const comparePasswords = (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePasswords
}