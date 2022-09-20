const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    images:[{
        type:String
    }],
    price:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        default:"EUR"
    },
    haveMaterials:{
        type:Boolean,
        default:false
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CategoryModel"
    },
    productMaterials:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductMaterialModel"
    }]
}, {timestamps: true});

const ProductModel = mongoose.model("ProductModel", ProductSchema);

module.exports = ProductModel;