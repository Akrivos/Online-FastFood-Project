const ProductMaterialModel = require("../models/ProductMaterialModel")
const ProductModel = require("../models/ProductModel")

module.exports = {
    //Get all product materials
    getAllProductMaterials: async(req,res) => {
        try{
            const productMaterials = await ProductMaterialModel.find({})

            if(productMaterials.length!==0){
                res.status(200).json(productMaterials)
            }else{
                res.status(401).json({
                    message:"There are no product materials."
                })
            }
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Get one product material
    getOneProductMaterial: async(req,res) => {
        try{
            const productMaterial = await ProductMaterialModel.findById({
                _id: req.params.productMaterialId
            })

            if(productMaterial){
                res.status(200).json(productMaterial)
            }else{
                res.status(401).json({
                    message:"That product material does not exists."
                })
            }
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Create one product material
    createProductMaterial: async(req,res) => {
        try{
            const newProductMaterial = new ProductMaterialModel(req.body)
            await newProductMaterial.save()

            res.status(201).json({
                message:"A product material created successfully."
            })
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Update one product material
    updateOneProductMaterial: async(req,res)=>{
        try{
            await ProductMaterialModel.updateOne({_id:req.params.productMaterialId},{...req.body.productMaterial})

            res.status(201).json({
                message:"Updated successfully"
            })
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    },

    //Delete one product material
    deleteOneProductMaterial: async(req,res) => {
        try{
            const productMaterialId = req.params.productMaterialId
            await ProductMaterialModel.deleteOne({_id: productMaterialId})
            await ProductModel.updatMany({}, { $pull: { productMaterials: productMaterialId } }, { multi: true })

            res.status(201).json({
                message:"Deleted Successfully!"
            })
            
        }catch(err){
            res.status(500).json({
                error:err
            })
        }
    }
}