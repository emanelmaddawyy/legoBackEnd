var express = require('express');
let controller = require('../controllers/subscribe-controller')
var router = express.Router();

router.post('/', controller.subscribe)



module.exports = router;