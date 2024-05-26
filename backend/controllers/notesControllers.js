const Note = require("../models/note");

const fetchAllNotes = async(req, res)=>{
    //1. Get all notes from the database
    //2. Send the notes back as a response
    const note = await Note.find({});
    //-----------------------------(1)
    res.json({notes: note})
    //--------------------------(2)
}

const fetchNote = async(req, res)=>{
    //1. Get id off the url
    //2. Find the notes assoc with id
    //3. send response with that note as the payload
    const noteId = req.params.id;
    //-------------------------(1)
    const note = await Note.findById(noteId)
    //-------------------------(2)
    res.json({notes: note}); 
    //-------------------------(3)
}

const createNote = async(req,res)=>{
    //1. Get data from req.body
    //2. Create note 
    //3. Respond with new copy of Note
    console.log(`req.body: ${req.body}`);
    const title = req.body.title;
    const body = req.body.body;
//// const {title, body} = req.body
//------------------1
    const note = await Note.create({
        title: title,
        body: body
    }) //-----------------2
    res.json({
        notes: note
    })
    //----------------3
    
}

const updateNote = async(req,res)=>{
    //1. get data from url
    //2. get the data off the id
    //3. Find and update Note
    //4. Retrieve updated Noteand send it as a response

    const noteId = req.params.id;
    //---------------------1
const {title,body} = req.body
    //----------------------2
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        body: body
    })
    const updateNote = await Note.findById(noteId)
    res.json({
        notes: updateNote
    })
}

const deleteNote = async(req, res) => {
    const noteId = req.params.id;
    await Note.deleteOne({
        _id: noteId
    });
    res.send({Success: "Record has been deleted."})
}

module.exports = {
    fetchAllNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
}