const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesControllers");//import the controllers and put here instead of server.js

router.get("/", notesController.fetchAllNotes);
// Obj: We want to establish CRUD routes for our Notes Model 
// app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
router.get("/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
router.post('/', notesController.createNote);
// -----------------> Create a Notes - [Create]
router.put("/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
router.delete("/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]

// - -  - - - - - -- - - - - -- - - - - - - - - - - -- - - - -- 

module.exports = router;