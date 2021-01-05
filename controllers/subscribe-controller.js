
const Subscribe = require('../models/Subscribe');
const {
  response
} = require('express');





const subscribe = async (req, res, next) => {
  const newUser = req.body;

  // validate body
  if (!newUser.email ){
    res.status(400).send({
      message: 'All fields are required'
    });

    return;
  }

  try {
    // check if user already exists with the same email
    const isUserExists = await Subscribe.exists({
      email: newUser.email
    });
    if (isUserExists) {
      res.status(400).send({
        message: 'Email address already used before'
      });
      return;
    }


    // here, all validation are ok. Add the user
    await Subscribe.create(newUser);
    res.status(201).send();
  } catch (error) {
    next(error)
  }
}
module.exports ={subscribe}