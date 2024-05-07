const express = require("express");
const dataController = require("../controller/data");

const router = express.Router();

// GET all the products
router.get("/products", dataController.getProducts);

// GET all the products by category
router.get("/products/:category", dataController.getProductByCategory);

module.exports = router;
