const OrderModel = require("../models/OrderModel")
const shippingDetails = require("../models/ShippingDetailsModel")
const OrderDetailsModel = require("../models/OrderDetailsModel")
const ShippingDetails = require("../models/ShippingDetailsModel")

module.exports = {
    //Get all orders
    getAllOrders: async(req,res) => {
        try{
            const orders = await OrderModel.find({})
                .populate("orderDetails")
                .populate("shippingDetails")

            if(orders.length !== 0){
                res.status(200).json(orders)
            }else{
                res.status(401).json({
                    message:"There are no orders"
                })
            }
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Get one order
    getOneOrder: async(req,res) => {
        try{
            const order = await OrderModel.findById({
                _id: req.params.orderId
            })

            if(order){
                res.status(200).json(order)
            }else{
                res.status(401).json({
                    message: "That order does not exists."
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Create one order
    createOrder: async (req,res) => {
        try{
            const {
                totalPrice, 
                currency, 
                paymentMethod, 
                note, 
                orderDetails, 
                shippingDetails,
                user
            } = req.body

            const newOrder = new OrderModel({
                totalPrice,
                currency,
                paymentMethod,
                note,
                orderDetails,
                shippingDetails,
                user
            })

            await newOrder.save()

            res.status(201).json({
                message:"Created successfully!"
            })



        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    }
}