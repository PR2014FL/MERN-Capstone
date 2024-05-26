const express = require("express");
const router = express.Router();
const goalControllers = require("../controllers/goalControllers");

router.get("/", goalControllers.fetchAllGoals); //READ all Goals

router.get("/:id", goalControllers.fetchGoal); //READ goal by Id

router.post("/", goalControllers.createGoal); //CREATE new goal

router.put("/:id", goalControllers.updateGoal); //UPDATE goal by id

router.delete("/:id", goalControllers.deleteGoal); // DELETE by id

module.exports = router;
