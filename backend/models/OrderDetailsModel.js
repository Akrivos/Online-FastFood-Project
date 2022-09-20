const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductModel"
    },
    selectedMaterials:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductMaterialModel",
        default:null
    }],
    price:{
        type:Number,
        default:0
    }
}, {timestamps: true})

const OrderDetailsModel = mongoose.model("OrderDetailsModel", OrderDetailsSchema);

module.exports = OrderDetailsModel;