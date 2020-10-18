// //   createOneParticipant,
//   getAllParticipants,
//   getParticipantsByName,
//   getParticipantsByBootcamp,

const participants = require("../models/participants");

// get all participants
async function getAllParticipants(req, res) {
  return res.json({
    success: true,
    payload: await participants.getAllParticipants(),
  });
}

// get participants by partial name
async function getParticipantsByName(req, res, next) {
  if (!req.query.name) {
    return next();
  }
  return res.json({
    success: true,
    payload: await participants.getParticipantsByName(req.query.name),
  });
}

// get participants by bootcamp
async function getParticipantsByBootcamp(req, res, next) {
  if (!req.query.bootcamp) {
    return next();
  }
  return res.json({
    success: true,
    payload: await participants.getParticipantsByBootcamp(req.query.bootcamp),
  });
}

// create participant
async function createParticipant(req, res, next) {
  return res.json({
    success: true,
    payload: await participants.createOneParticipant(req.body),
  });
}

module.exports = {
  getAllParticipants,
  getParticipantsByName,
  getParticipantsByBootcamp,
  createParticipant,
};
