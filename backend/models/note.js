const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({//set the schema
    title: String,
    body: String
});

const Note = mongoose.model("Note", noteSchema); //this is the model

module.exports = Note;
//Models are a representation of our data
// Schema: we create a blueprint for the model so we can export
//that format to our express server and eventually link it to our
//routes {CRUD operations}