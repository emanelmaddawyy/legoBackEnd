var express = require('express');
let controller = require('../controllers/auth-controller')
var router = express.Router();

router.post('/register', controller.register)
router.post('/login', controller.login)
router.post('/resetPassword', controller.resetPassword)
router.post('/changePassword', controller.changePassword)


module.exports = router;