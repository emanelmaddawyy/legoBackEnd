var express = require('express');
let controller = require('../controllers/auth-controller')
var router = express.Router();

router.post('/register', controller.register)

module.exports = router;