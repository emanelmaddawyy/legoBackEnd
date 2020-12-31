const Themes = require('../models/Themes');
const Product = require('../models/Product');

const getThemes = async (req, res, next) => {
  try {
    const themes = await Themes.find();
    res.send(themes);
  } catch (error) {
    next(error)
  }
};

const getThemeProducts = async (req, res, next) => {
  const themeVisibleId = req.params.visibleId;
  try {
    // get theme
    const theme = await Themes.findOne({
      visibleId: themeVisibleId
    });

    // validate theme
    if (!theme) {
      res.status(404).send({
        message: "Theme not found"
      });
      return;
    }

    // get products of this theme
    const products = await Product.find({
      theme: theme._id
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getThemes,
  getThemeProducts
}