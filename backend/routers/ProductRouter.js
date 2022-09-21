const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController")

//Get all products router
router.get("/api/products", ProductController.getAllProducts)

//Get one product router
router.get("/api/product/:productId", ProductController.getOneProduct)

//Create one product router
router.post("/api/product", ProductController.createProduct)

//Update one product router
router.put("/api/product/:productId", ProductController.updateOneProduct)

//Delete one product router
router.delete("/api/product/:productId", ProductController.deleteOneProduct)

module.exports = router