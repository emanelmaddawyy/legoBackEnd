var express = require('express');
let controller = require('../controllers/filters-controller')
var router = express.Router();

router.get("/shopby", controller.getShopByFilters)
router.get("/productFilters", controller.getProductFilters)

module.exports = router;