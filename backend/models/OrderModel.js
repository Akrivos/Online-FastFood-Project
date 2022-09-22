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
        type:String,
        default:new Date().toLocaleString() 
    },
    paymentMethod:{
        type:String
    },
    note:{
        type:String,
        default:null
    },
    orderDetails:[{
        quantity:{
            type:Number,
            default:1
        },
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
    shippingDetails:{
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
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
            type:Number,
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