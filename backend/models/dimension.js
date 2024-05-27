const mongoose = require("mongoose");

const dimensionSchema = new mongoose.Schema({
    dimension: String,
    description: String
});

const Dimension = mongoose.model("Dimension", dimensionSchema);

module.exports = Dimension;
