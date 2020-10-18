// create/add - NOT yet implemented.
//
//      GET /sessions (don't know what to call this)
//      POST /sessions (add a new session (for a particular date/instance))
//      PUT/PATCH /sessions (to update a participant) ?

const { query } = require("../db/index");

// GET /sessions
async function getAllSessions() {
  const response = await query(
    `SELECT
      sessions.id, date, points, participants.name as name, bootcamp, energisers.name as energiser, category
    FROM sessions
    INNER JOIN energisers
      ON sessions.energiser_id = energisers.id
    INNER JOIN participants
      ON sessions.participant_id = participants.id;`
  );
  return response.rows;
}

// GET /sessions?energiser=energiser
async function getSessionsByEnergiser(partialEnergiser) {
  const response = await query(
    `SELECT
      sessions.id, date, points, participants.name as name, bootcamp, energisers.name as energiser, category
    FROM sessions
    INNER JOIN energisers
      ON sessions.energiser_id = energisers.id
    INNER JOIN participants
      ON sessions.participant_id = participants.id
    WHERE energisers.name ~~* ('%' || $1 || '%');`,
    [partialEnergiser]
  );
  return response.rows;
}

module.exports = {
  getAllSessions,
  getSessionsByEnergiser,
};

if (require.main === module) {
  getSessionsByEnergiser("catter");
}
