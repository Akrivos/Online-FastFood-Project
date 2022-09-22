const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController")

//Get all categories router
router.get("/api/categories", CategoryController.getAllCategories)

//Get one category router
router.get("/api/category/:categoryId", CategoryController.getOneCategory)

//Create one category router
router.post("/api/category", CategoryController.createCategory)

//Update one category router
router.put("/api/category/:categoryId", CategoryController.updateOneCategory)

//Delete one category router
router.delete("/api/category/:categoryId", CategoryController.deleteOneCategory)

module.exports = router