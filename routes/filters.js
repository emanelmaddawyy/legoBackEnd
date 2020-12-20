var express = require('express');
let controller = require('../controllers/filters-controller')
var router = express.Router();

router.get("/shopby", controller.getShopByFilters)

module.exports = router;