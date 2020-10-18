// const seedData = require("./seedData");

const { createOneEnergiser } = require("../../models/energisers");
const { createOneParticipant } = require("../../models/participants");
const { query } = require("../index");

const seedData = require("./seedData");

// populate energisers
async function populateEnergisersTable() {
  const responses = [];
  for (const energiser of seedData.energisers) {
    const response = await createOneEnergiser(energiser);
    responses.push(response.rows);
  }
  return responses;
}

// populate participants
async function populateParticipantsTable() {
  const responses = [];
  for (const participant of seedData.participants) {
    const response = await createOneParticipant(participant);
    responses.push(response.rows);
  }
  return responses;
}

// populate sessions
async function populateSessionsTable() {
  const responses = [];
  for (const {
    participant_id,
    energiser_id,
    date,
    points,
  } of seedData.seedData) {
    try {
      const response = await query(
        `INSERT INTO sessions (participant_id, energiser_id, date, points)
          VALUES ($1, $2, $3, $4) RETURNING *;`,
        [participant_id, energiser_id, date, points]
      );
      responses.push(response.rows);
    } catch (err) {
      console.error(err);
      console.log({
        participant_id,
        energiser_id,
        date,
        points,
      });
      break;
    }
  }
  return responses;
}

module.exports.populateAllTables = async function populateAllTables() {
  await populateEnergisersTable();
  await populateParticipantsTable();
  await populateSessionsTable();
  console.log("Should have populated all tables now.");
};

if (require.main === module) {
  module.exports.populateAllTables();
}
