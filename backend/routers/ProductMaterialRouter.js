const express = require("express");
const router = express.Router();
const ProductMaterialController = require("../controllers/ProductMaterialController")

//Get all product materials router
router.get("/api/productMaterials", ProductMaterialController.getAllProductMaterials)

//Get one product material router
router.get("/api/productMaterial/:productMaterialId", ProductMaterialController.getOneProductMaterial)

//Create one product material router
router.post("/api/productMaterial", ProductMaterialController.getOneProductMaterial)

//Update one product material router
router.put("/api/productMaterial/:productMaterialId", ProductMaterialController.updateOneProductMaterial)

//Delete one product material router
router.delete("/api/productMaterial/:productMaterialId", ProductMaterialController.deleteOneProductMaterial)

module.exports = router