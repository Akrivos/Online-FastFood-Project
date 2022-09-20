const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        unique:true
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductModel"
    }]
}, {timestamps: true})

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);

module.exports = CategoryModel;