const ShippingDetailsModel = require("../models/ShippingDetailsModel")
const UserModel = require("../models/UserModel")


module.exports = {
    //Get one shipping details
    getOneShippingDetails: async(req,res) => {
        try{
            const shippingDetails = await ShippingDetailsModel.findById({
                _id: req.params.shippingDetailsId
            })

            if(shippingDetails){
                res.status(200).json(shippingDetails)
            }else{
                res.status(401).json({
                    message:"That shipping detail does not exists"
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Create shipping details
    createShippingDetails: async (req,res) => {
        try{

            //Check if user exists
            const findUser = await UserModel.findById({
                _id: req.body.user
            })

            if(findUser){
                const newShippingDetails = new ShippingDetailsModel(req.body)

                await newShippingDetails.save()
    
                res.status(201).json({
                    message:"Created successfully."
                })
            }else{
                res.status(401).json({
                    message:"That user does not exists."
                })
            }
            
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Update shipping details
    updateShippingDetails: async(req,res) => {
        try{
            //Check if shipping details exists
            const findShippingDetails = await ShippingDetailsModel.findById({
                _id: req.params.shippingDetailsId
            })

            if(findShippingDetails){
                await ShippingDetailsModel.updateOne({_id: req.params.shippingDetailsId},{...req.body.shippingDetails})
                res.status(201).json({
                    message: "Updated successfully."
                })
            }else{
                res.status(401).json({
                    message:"That shipping detail does not exists."
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Delete one shipping details
    deleteShippingDetails: async(req,res) => {
        try{
            await ShippingDetailsModel.deleteOne({_id: req.params.shippingDetailsId})

            res.status(201).json({
                message:"Deleted successfully"
            })
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    }
}