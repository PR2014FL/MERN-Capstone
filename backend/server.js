require("dotenv").config(); //allows env file
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");//allows to receive requests on cross-origins
const ConnectToDb = require("./config/connectToDb");//This pulls our Mongoose(MongoDB) connection into the application
const notesRouter = require("./routes/notes");
const candyRouter = require("./routes/candy");
const studentRouter = require("./routes/student");
//Separation of concerns: Models > Controller > Router > Main Server JS file
// const Note = require("./models/note");  //moved the model and imported to the corresponding controller file
// const Candy = require("./models/candy");  //moved the model and imported to the corresponding controller file
// const notesController = require("./controllers/notesControllers");  //moved controllers to the corresponding routes file
// const candyController = require("./controllers/candyControllers"); //moved controllers to the corresponding routes file
// const studentController = require("./controllers/studentControllers"); //moved controllers to the corresponding routes file
app.use(cors());//use as middleware
app.use(express.json({extended: true}));//express doesn't convert to JSON naturally
app.use(express.urlencoded({extended: true}))
app.use("/notes", notesRouter);
app.use("/candies", candyRouter);
app.use("/students", studentRouter);

ConnectToDb(); //This initializes our connectToDb function from the config folder

app.get("/",(req,res)=>{
    res.send("This is a Landing Page")
});

app.listen(PORT, () => {
    console.log(`Express sevrer listening on port num ${PORT}`)
} );