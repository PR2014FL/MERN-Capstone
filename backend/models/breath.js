const mongoose = require("mongoose");

const breathSchema = new mongoose.Schema({
    technique: String,
    steps: Array,
    description: String
});

const Breath = mongoose.model("Breath", breathSchema);

module.exports = Breath;