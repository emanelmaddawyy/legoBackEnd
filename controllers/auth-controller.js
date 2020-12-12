const Users = require('../models/Users');

module.exports = {
  // register api
  async register(req, res, next) {
    const newUser = req.body;

    // validate body
    if (!newUser.email || !newUser.password || !newUser.birthDate) {
      res.status(400).send({
        message: 'All fields are required'
      });

      return;
    }

    try {
      // check if user already exists with the same email
      const isUserExists = await Users.exists({email: newUser.email});
      if (isUserExists) {
        res.status(400).send({
          message: 'Email address already used before'
        });
        return;
      }

      // here, all validation are ok. Add the user
      await Users.create(newUser);
      res.status(201).send();
    } catch (error) {
      next(error)
    }
  }
}