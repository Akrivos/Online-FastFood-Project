const mongoose = require("mongoose");

const ShippingDetailsSchema = new mongoose.Schema({
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
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
},{timestamps:true})

const ShippingDetails = mongoose.model("ShippingDetailsModel", ShippingDetailsSchema);

module.exports = ShippingDetails;