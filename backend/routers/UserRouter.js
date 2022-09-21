const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController")


//Get all users router
router.get("/api/users", UserController.getAllUsers)

//Get one user router
router.get("/api/user/:userId", UserController.getOneUser)

//Register router
router.post("/api/register", UserController.registerUser)

//Login Router
router.post("/api/login", UserController.loginUser)

//Update user router
router.put("/api/user", UserController.updateUser)

//Delete user router
router.delete("/api/user", UserController.deleteUser)

module.exports = router