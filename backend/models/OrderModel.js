const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    totalPrice:{
        type:Number,
        default:0
    },
    currency:{
        type:String,
        default:"EUR"
    },
    date:{
        type:Date,
        default:Date.now().toLocaleString() 
    },
    paymentMethod:{
        type:String
    },
    note:{
        type:String,
        default:null
    },
    orderDetails:[{
        price:{
            type:Number
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"ProductModel"
        },
        selectedMaterials:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"ProductMaterialModel",
        }]
    }],
    // orderDetails:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"OrderDetailsModel"
    // }],
    shippingDetails:{
        houseNumber:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        city:{
            type:String,
            require:true
        },
        zip:{
            type:String,
            require:true
        },
        floor:{
            type:Number,
            require:true
        },
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
}, {timestamps: true})

const OrderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = OrderModel;