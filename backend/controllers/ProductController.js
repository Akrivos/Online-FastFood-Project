const ProductModel = require("../models/ProductModel")
const CategoryModel = require('../models/CategoryModel')

module.exports = {
    //Get all products
    getAllProducts: async(req,res) => {
        try{
            const products = await ProductModel.find({})
                .populate("category")
                .populate("productMaterials")

            if(products.length!==0){
                res.status(200).json(products)
            }else{
                res.status(401).json({
                    message:"There are no products."
                })
            }
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Get one product
    getOneProduct: async(req,res) => {
        try{
            const product = await ProductModel.findById({_id: req.params.productId})
            if(product){
                res.status(200).json(product)
            }else{
                res.status(401).json({
                    message:"That product does not exists"
                })
            }
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Create one product
    createProduct: async(req,res) => {
        try{

            //Check if category exists
            const findCategory = await CategoryModel.findById({
                _id: req.body.category
            })

            if(findCategory){
                const newProduct = new ProductModel(req.body)
                await newProduct.save()
                
                res.status(201).json({
                    message:"Created Successfully."
                })
            }else{
                res.status(401).json({
                    message:"You must select product category."
                })
            }
            
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Update one product
    updateOneProduct: async(req,res) => {
        try{
            //Check if product exists
            const findProduct = await ProductModel.findById({
                _id: req.params.productId
            })

            //Check if category exist
            const findCategory = await CategoryModel.findById({
                _id: req.body.category
            })

            if(findProduct && findCategory){
                await ProductModel.updateOne({_id: req.params.productId} , {...req.body})
                res.status(201).json({
                    message:"Updated Successfully."
                })
            }else if(findProduct){
                res.status(201).json({
                    message:"Product does not exists"
                })
            }else{
                res.status(201).json({
                    message:"Category does not exists"
                })
            }
            
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Delete one product
    deleteOneProduct: async(req,res) => {
        try{
            const productId = req.params.productId
            await ProductModel.deleteOne({_id: productId})
            await CategoryModel.updateMany({}, { $pull: { products: productId } }, { multi: true })

            res.status(201).json({
                message:"Deleted Successfully."
            })
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    }
}