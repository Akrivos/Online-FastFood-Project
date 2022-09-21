const mongoose = require("mongoose");

mongoose.connect(process.env.DB)

const db = mongoose.connection;

db.on("error",(err,result)=>{console.log("Error with db")})
db.once("open", ()=>{console.log(`[Database ]: Connected to the database`)})
db.on("disconnected", ()=>{console.log(`[Database ]: Database disconnected!`)})

module.exports = db;