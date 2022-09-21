const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController")

//Get all orders router
router.get("/api/orders", OrderController.getAllOrders)

//Get one order router
router.get("/api/order/:orderId", OrderController.getOneOrder)

//Create order
router.post("/api/order", OrderController.createOrder)

module.exports = router