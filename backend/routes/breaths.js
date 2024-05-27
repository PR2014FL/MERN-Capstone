//bring in express, router, and the controller
const express = require("express");
const router = express.Router();
const breathControllers = require("../controllers/breathControllers");

router.get("/", breathControllers.fetchAllBreath);

router.get("/:id", breathControllers.fetchBreath);

module.exports = router;
