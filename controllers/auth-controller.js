const {
  getRandomCode
} = require('../utils/utils');

const {
  sendResetPasswordEmail
} = require('../utils/email-utils');

const {
  hashPassword,
  comparePasswords
} = require('../utils/hash-utils');

const Users = require('../models/Users');
const {
  response
} = require('express');

// register api
const register = async (req, res, next) => {
  const newUser = req.body;

  // validate body
  if (!newUser.email || !newUser.password || !newUser.birthDate || !newUser.country) {
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  try {
    // check if user already exists with the same email
    const isUserExists = await Users.exists({
      email: newUser.email
    });
    if (isUserExists) {
      res.status(400).send({
        message: 'Email address already used before'
      });
      return;
    }

    // hash the password
    const hashedPassword = await hashPassword(newUser.password);
    newUser.password = hashedPassword;

    // here, all validation are ok. Add the user
    await Users.create(newUser);
    res.status(201).send();
  } catch (error) {
    next(error)
  }
}

// login api
const login = async (req, res, next) => {
  const loggedUser = req.body;

  // validate body
  if (!loggedUser.email || !loggedUser.password) {
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  try {
    // check if user already exists with the same email
    const isUserExists = await Users.exists({
      email: loggedUser.email
    });
    if (isUserExists) {
      // check password hash
      const user = await Users.findOne({email: loggedUser.email});
      const compareHashResult = await comparePasswords(loggedUser.password, user.password);

      if (compareHashResult === true) {
        res.status(200).send({
          _id: user._id,
          email: loggedUser.email
        });
      } else {
        res.status(401).send({
          message: "Password is invalid"
        });
      }
    } else {
      res.status(401).send({
        message: "Email is invalid"
      });
    }
  } catch (error) {
    next(error)
  }
}

// reset password api
const resetPassword = async (req, res, next) => {
  const email = req.body.email;

  // validate email
  if (!email) {
    res.status(400).send({
      message: 'Email address is required'
    })

    return;
  }

  // check if email exists in users table
  const isUserExists = await Users.exists({
    email: email
  });
  if (!isUserExists) {
    res.status(404).send({
      message: 'Email address is not registered in the system'
    });
    return;
  }

  // email exists,
  // generate ranome code
  const resetCode = getRandomCode();

  // save the reset code in users
  await Users.updateOne({
    email: email
  }, {
    resetCode: resetCode
  });

  // send reset password email
  try {
    const sendEmailResult = await sendResetPasswordEmail(email, resetCode);
    res.send();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: 'Something went wrong, please try again later'
    })
  }
}

// change password api
const changePassword = async (req, res, next) => {
  const email = req.body.email;
  const resetCode = req.body.resetCode;
  const newPassword = req.body.newPassword;

  // validate params
  if(!email || !resetCode || !newPassword) {
    res.status(400).send({
      message: 'All fields are required'
    });
    return;
  }

  // ensure that resetCode and email are valid
  const isUserExists = await Users.exists({
    email: email,
    resetCode: resetCode
  });
  if (!isUserExists) {
    res.status(401).send({
      message: 'Invalid email or reset code'
    });
    return;
  }

  // Update with the new password
  const hashedPassword = await hashPassword(newPassword);
  await Users.updateOne({
    email: email
  }, {
    resetCode: null,
    password: hashedPassword
  });

  res.send();

}


module.exports = {
  register,
  login,
  resetPassword,
  changePassword
}