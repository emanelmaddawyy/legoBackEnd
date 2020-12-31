var express = require('express');
let controller = require('../controllers/countries-controller')
var router = express.Router();


router.get("/",controller.countries)

module.exports = router;