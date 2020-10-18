const sessions = require("../models/sessions");

// get all sessions
async function getAllSessions(req, res) {
  return res.json({
    success: true,
    payload: await sessions.getAllSessions(),
  });
}

// GET /sessions?energiser=energiser
async function getSessionsByEnergiser(req, res, next) {
  if (!req.query.energiser) {
    return next();
  }
  return res.json({
    success: true,
    payload: await sessions.getSessionsByEnergiser(req.query.energiser),
  });
}

module.exports = {
  getAllSessions,
  getSessionsByEnergiser,
};
