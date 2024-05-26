const Goal = require("../models/goal");

const fetchAllGoals = async (req, res) => {
  //1. Get all goals from mongo
  const goal = await Goal.find({});
  //2. Send all goals back as response
  res.json({ goals: goal });
};

const fetchGoal = async (req, res) => {
  //1. get id from url
  const goalId = req.params.id;
  //2.find object associated with id
  const goal = await Goal.findById(goalId);
  //3. send goal in response
  res.json({ goals: goal });
};

const createGoal = async (req, res) => {
  //1. Get data from req.body
  const title = req.body.title;
  const dimension = req.body.dimension;
  const body = req.body.body;
  //2. create goal
  const goal = await Goal.create({
    title: title,
    dimension: dimension,
    body: body,
  });

  res.json({ goals: goal });
};

const updateGoal = async (req, res) => {
  //1. get id from URL
  const goalId = req.params.id;
  //2. get data from id via destructuring
  const { title, dimension, body } = req.body;
  //3. find and update goal
  await Goal.findByIdAndUpdate(goalId, {
    title: title,
    dimension: dimension,
    body: body,
  });
  //4. get updated goal and send as response
  const updateGoal = await Goal.findById(goalId);
  res.json({ goals: updateGoal });
};

const deleteGoal = async (req, res) => {
  //1. get ID from url
  const goalId = req.params.id;
  //2. fetch note and delete
  await Goal.deleteOne({ _id: goalId });
  //3. respond with message
  res.send({ Success: "Goal has been deleted." });
};

module.exports = {
  fetchAllGoals,
  fetchGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
