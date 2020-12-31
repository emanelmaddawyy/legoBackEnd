var express = require('express');
let controller = require('../controllers/continents-controller')
var router = express.Router();


router.get("/", controller.getContinents)

module.exports = router;