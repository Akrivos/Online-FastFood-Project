const CategoryModel = require("../models/CategoryModel")
const ProductModel = require("../models/ProductModel")

module.exports = {
    //Get all categories
    getAllCategories: async(req,res) => {
        try{
            const categories = await CategoryModel.find({}).populate("products")
            if(categories.length!==0){
                res.status(200).json(categories)
            }else{
                res.status(401).json({
                    message:"There are no categories!"
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Get one category
    getOneCategory: async(req,res) => {
        try{
            const category = await CategoryModel.findById({
                _id: req.params.categoryId
            }).populate("products")

            if(category){
                res.status(200).json(category)
            }else{
                res.status(401).json({
                    message:"That category does not exists!"
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Create one category
    createCategory: async(req,res) => {
        try{
            const newCategory = new CategoryModel(req.body)
            await newCategory.save()

            res.status(201).json({
                message: "A Category created successfully!"
            })
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Update one category
    updateOneCategory: async(req,res) => {
        try{
            const {name,slug} = req.body
            //check if category exists
            const findCategory = await CategoryModel.findById({
                _id: req.params.categoryId
            })

            if(findCategory){
                await CategoryModel.updateOne({_id:req.params.categoryId},{...req.body})
                res.status(201).json({
                    message:"Updated Successfully"
                })
            }else{
                res.status(401).json({
                    message: "That category does not exists"
                })
            }

        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Delete one category
    deleteOneCategory: async(req,res)=>{
        try{
            const categoryId = req.params.categoryId
            await CategoryModel.deleteOne({_id: categoryId})
            await ProductModel.deleteMany({category: categoryId})

            res.status(201).json({
                message: "Deleted Successfully"
            })
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    }
}