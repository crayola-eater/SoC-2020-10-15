const { query } = require("../db/index");

// GET /participants
async function getAllParticipants() {
  const response = await query("SELECT * FROM participants;");
  return response.rows;
}

// GET /participants?name=name
async function getParticipantsByName(name) {
  const response = await query(
    "SELECT * FROM participants WHERE name ~~* ('%' || $1 || '%');",
    [name]
  );
  return response.rows;
}
// GET /participants?bootcamp=bootcamp
async function getParticipantsByBootcamp(bootcampNumber) {
  const response = await query(
    "SELECT * FROM participants WHERE bootcamp = $1;",
    [bootcampNumber]
  );
  return response.rows;
}

// POST /participants (to create an participant)
async function createOneParticipant({ name, bootcamp }) {
  const response = await query(
    `INSERT INTO participants (name, bootcamp)
      VALUES ($1, $2) RETURNING *;`,
    [name, bootcamp]
  );
  return response.rows[0];
}

module.exports = {
  createOneParticipant,
  getAllParticipants,
  getParticipantsByName,
  getParticipantsByBootcamp,
};

if (require.main === module) {
  getParticipantsByBootcamp(0);
}
