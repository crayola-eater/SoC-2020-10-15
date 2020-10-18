const express = require("express");

const router = express.Router();
const energisersController = require("../controllers/energisers");

router.get("/", energisersController.getEnergisersByName); // by name
router.get("/", energisersController.getAllEnergisers); // all
router.post("/", energisersController.createEnergiser); // create

module.exports = router;
