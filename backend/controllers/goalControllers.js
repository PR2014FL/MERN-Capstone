const Goal = require("../models/goal");

const fetchAllGoals = async(req, res)=>{
    //1. Get all goals from mongo
    const goal = await Goal.find({});
    //2. Send all goals back as response
    res.json(goals: goal);
}