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
            if(req.body.categoryId){
                const newProduct = new ProductModel(req.body)
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
            await ProductModel.updateOne({_id: req.params.productId} , {...req.body.product})

            res.status(201).json({
                message:"Updated Successfully."
            })
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
            await CategoryModel.updatMany({}, { $pull: { products: productId } }, { multi: true })

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