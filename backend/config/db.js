const mongoose = require("mongoose")
require("dotenv").config()


const db = process.env.MONGO_URI


const connectDB = async () =>{
    try {
        mongoose.connect(db, {
            useNewUrlParser:true
        });
        console.log("Database Connected");
    } catch (error) {
        console.log('Server Connection fail.');
    }
}


module.exports = connectDB;