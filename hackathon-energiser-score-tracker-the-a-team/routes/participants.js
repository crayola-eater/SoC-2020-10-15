const express = require("express");

const router = express.Router();
const participantsController = require("../controllers/participants");

router.get("/", participantsController.getParticipantsByName); // by name
router.get("/", participantsController.getParticipantsByBootcamp); // by bootcamp
router.get("/", participantsController.getAllParticipants); // all
router.post("/", participantsController.createParticipant); // create

module.exports = router;
