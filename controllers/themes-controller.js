const Themes = require('../models/Themes');

module.exports = {
  async themes(req, res, next) {
    try {
      const themes = await Themes.find().select([
        'id', 'name'
      ]);
      res.send(themes);
    } catch (error) {
      next(error)
    }
  }
}