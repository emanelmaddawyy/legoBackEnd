var express = require('express');
let controller = require('../controllers/order-controller')
var router = express.Router();

router.post('/', controller.makeOrder);
router.get('/', controller.getOrders);


module.exports = router;