var express = require('express');
let controller = require('../controllers/interest-controller')
var router = express.Router();


router.get("/",controller.interest);
router.get("/:visibleId/products", controller.getInterestProducts);

module.exports = router;