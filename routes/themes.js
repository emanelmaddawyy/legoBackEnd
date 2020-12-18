var express = require('express');
let controller = require('../controllers/themes-controller')
var router = express.Router();


router.get("/",controller.themes)

module.exports = router;