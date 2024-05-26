const express = require("express");
const router = express.Router();
const candyController = require("../controllers/candyControllers");

router.get("/", candyController.fetchAllCandies);
//fetchAllCandies

router.get("/:id", candyController.fetchOneCandy);
//fetchOneCandy

router.post("/", candyController.createCandy);
//createCandy

router.put("/:id", candyController.updateCandy);
//updateCandy

router.delete("/:id", candyController.deleteCandy);
//deleteCandy

module.exports = router;