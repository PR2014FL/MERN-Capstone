//Responsible for connecting the Mongoose database to the express server application
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently connected to MongoDB Cluster");  //This is how the app connects to MongoDB
}

module.exports = connectToDb