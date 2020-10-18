const express = require("express");

const router = express.Router();
const sessionsController = require("../controllers/sessions");

router.get("/", sessionsController.getSessionsByEnergiser); // by energiser
router.get("/", sessionsController.getAllSessions); // all

module.exports = router;
