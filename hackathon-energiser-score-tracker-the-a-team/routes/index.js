const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

// Participants front end routes
router.get("/create-participant", (req, res) => {
  res.render("participants/create-participant");
});

router.get("/get-all-participants", (req, res) => {
  res.render("participants/get-all-participants");
});

// Energisers front end routes
router.get("/create-energiser", (req, res) => {
  res.render("energisers/create-energiser");
});

router.get("/get-all-energisers", (req, res) => {
  res.render("energisers/get-all-energisers");
});

// Sessions front end routes
router.get("/get-all-sessions", (req, res) => {
  res.render("sessions/get-all-sessions");
});

// router.get("/energisers", energisersController.getEnergisersByName); // by name
// router.get("/energisers", energisersController.getAllEnergisers); // all
// router.post("/energisers", energisersController.createEnergiser); // create

module.exports = router;
