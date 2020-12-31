var express = require('express');
let controller = require('../controllers/themes-controller')
var router = express.Router();


router.get("/", controller.getThemes);
router.get("/:visibleId/products", controller.getThemeProducts);

module.exports = router;