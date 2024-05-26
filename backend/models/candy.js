const mongoose = require("mongoose");


const candySchema = new mongoose.Schema({
    kind: String,
    flavor: String
});

const Candy = mongoose.model("Candy", candySchema); 

module.exports = Candy;