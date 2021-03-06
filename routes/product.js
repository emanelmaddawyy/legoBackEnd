var express = require('express');
let controller = require('../controllers/product-controller')
var router = express.Router();


router.get("/", controller.products);
router.post("/getProductsFiltered", controller.getProductsFiltered);
router.get("/:id", controller.getProductDetails);

module.exports = router;