const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderDetails:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"OrderDetailsModel"
    }],
    shippingDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ShippingDetailsModel"
    },
    totalPrice:{
        type:Number,
        default:0
    },
    currency:{
        type:String,
        default:"EUR"
    },
    paymentMethod:{
        type:String
    },
    note:{
        type:String,
        default:null
    }
}, {timestamps: true})

const OrderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = OrderModel;