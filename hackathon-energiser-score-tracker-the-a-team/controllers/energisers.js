const energiser = require("../models/energisers");

// get all energisers
async function getAllEnergisers(req, res) {
  return res.json({
    success: true,
    payload: await energiser.getAllEnergisers(),
  });
}

// get energisers by partial name
async function getEnergisersByName(req, res, next) {
  if (!req.query.name) {
    return next();
  }
  return res.json({
    success: true,
    payload: await energiser.getEnergisersByName(req.query.name),
  });
}

// create energiser
async function createEnergiser(req, res, next) {
  return res.json({
    success: true,
    payload: await energiser.createOneEnergiser(req.body),
  });
}

module.exports = {
  getAllEnergisers,
  getEnergisersByName,
  createEnergiser,
};
