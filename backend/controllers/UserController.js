const UserModel = require("../models/UserModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    //Get all users
    getAllUsers: async(req,res) => {
        try{
            const users = await UserModel.find({})
            res.status(200).json(users)
        }catch(err){    
            res.status(500).json({
                error: err
            })
        }
    },

    //Get a user
    getOneUser: async (req,res) => {
        try{
            const user = await UserModel.findOne({_id: req.params.userId})
            if(user){
                res.status(200).json(user)
            }else{
                res.status(401).json({
                    message:"That user does not exists"
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Register User
    registerUser: async (req,res) => {
        try{
            const createUser = new UserModel(req.body.user)
            const role = req.body.user.role
    
            //Generate salt to hash password
            const salt = await bcrypt.genSalt(10)
            createUser.salt = salt
    
            //Hashed password
            createUser.password = await bcrypt.hash(createUser.password, salt)
            
            await createUser.save()
    
            res.status(201).json({
                message:"Your account created successfully"
            })
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
        
    },

    //Log in
    loginUser: async(req,res) => {
        try{
            const {email, password} = req.body

            //Find user
            const user = await UserModel.findOne({
                email
            })

            if(user){
                //Check if passwords matches
                bcrypt.compare(password, user.password, function(err,hash){
                    if(hash){
                        const token = jwt.sign(
                            {
                              email: user.email,
                              userId: user._id.toString(),
                              role: user.role,
                            },
                            process.env.TOKEN,
                          );

                        return res.status(200).json({
                            data: token,
                        });

                    }else if(err){
                        res.json({
                            error:err
                        })
                    }else{
                        res.status(401).json({
                            message: "Wrong email or password"
                        })
                    }
                })
            }else{
                res.status(401).json({
                    message: "That user does not exists"
                })
            }
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    },

    //Update User
    updateUser: async(req,res) => {
        try{
            const updateUser = await UserModel.updateOne({_id:req.params.userId},{...req.body.user})
            await updateUser.save()
            res.status(201).json({
                message:"Updated successfully!"
            })
        }catch(err){
            res.status(500).json({
                error: err
            })
        }
    }
}