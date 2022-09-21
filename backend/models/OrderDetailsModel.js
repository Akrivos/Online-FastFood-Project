const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
    price:{
        type:Number,
        default:0
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OrderModel",
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductModel"
    },
    selectedMaterials:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductMaterialModel",
        default:null
    }],
}, {timestamps: true})

const OrderDetailsModel = mongoose.model("OrderDetailsModel", OrderDetailsSchema);

module.exports = OrderDetailsModel;