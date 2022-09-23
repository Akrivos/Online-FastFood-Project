const OrderModel = require("../models/OrderModel")
const axios = require("axios")
module.exports = {
    //Get all orders
    getAllOrders: async(req,res) => {
        try{
            const orders = await OrderModel.find({})
                .populate("shippingDetails")
                .populate("orderDetails.selectedMaterials")

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
            }).populate("orderDetails.product")


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
            let {
                totalPrice, 
                currency, 
                paymentMethod, 
                note, 
                orderDetails, 
                shippingDetails,
                user
            } = req.body

            if(currency!=="EUR"){
                await axios.get(`https://api.apilayer.com/fixer/convert?to=${currency}&from=EUR&amount=${totalPrice}`, {
                    headers:{
                        "apikey":"hcmZurlHqwPG2jFNXc0JnolnyQjHJKwS"
                    }
                })
                .then(resp=>{
                    totalPrice = resp.data.result  
                })
                .catch(err=>{
                    console.log(err)
                })
            }

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