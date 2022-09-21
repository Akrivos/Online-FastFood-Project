const express = require("express");
const router = express.Router();
const ShippingDetailsController = require("../controllers/ShippingDetailsController")


//Get one shipping details router
router.get("/api/shippingDetails/:shippingDetailsId", ShippingDetailsController.getOneShippingDetails)

//Create shipping details router
router.post("/api/shippingDetails", ShippingDetailsController.getOneShippingDetails)

//Update shipping details router
router.put("/api/shippingDetails/:shippingDetailsId", ShippingDetailsController.updateShippingDetails)

//Delete shipping details router
router.delete("/api/shippingDetails/:shippingDetailsId", ShippingDetailsController.deleteShippingDetails)

module.exports = router