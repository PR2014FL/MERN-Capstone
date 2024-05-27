// import Express, Router, and dimensions controller
const express = require("express");
const router = express.Router();
const dimensionControllers = require("../controllers/dimensionControllers");

router.get("/", dimensionControllers.fetchAllDimensions);

module.exports = router;