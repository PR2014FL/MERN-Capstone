const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

router.get("/", studentController.fetchAllStudents);

router.get("/:id", studentController.fetchStudent);

router.post("/", studentController.createStudent);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent); 


module.exports = router;