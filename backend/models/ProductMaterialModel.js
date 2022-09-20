const mongoose = require("mongoose");

const ProductMaterialSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
}, {timestamps: true});

const ProductMaterialModel = mongoose.model("ProductMaterialModel", ProductMaterialSchema);

module.exports = ProductMaterialModel;