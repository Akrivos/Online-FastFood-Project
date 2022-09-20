const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    salt:{
        type:String,
        required: true
    }
},{timestamps:true})

const UserModel = mongoose.model("UserModel", UserSchema)

module.exports = UserModel