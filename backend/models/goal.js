const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    title: String,
    dimension: String,
    body: String
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;