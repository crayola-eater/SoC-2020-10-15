// https://www.postgresql.org/docs/9.1/datatype-enum.html
// CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
// CREATE TABLE person (
//     name text,
//     current_mood mood
// );

const { query } = require("../index");

// create participants
//      id SERIAL PRIMARY KEY
//      name VARCHAR(100) NOT NULL
//      bootcamp INTEGER NOT NULL

async function createParticipantsTable() {
  return await query(
    `CREATE TABLE IF NOT EXISTS participants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      bootcamp INTEGER NOT NULL
    );`
  );
  console.log(response.rows);
}

// CREATE TYPE category AS ENUM ('brainy', 'creative', 'physical', 'speed', 'random')
// create energisers
//      id SERIAL PRIMARY KEY
//      name VARCHAR(50) NOT NULL
//      category category NOT NULL
async function createEnergisersTable() {
  return await query(
    `CREATE TYPE category AS ENUM ('Brainy', 'Creative', 'Physical', 'Speed', 'Random');
    CREATE TABLE IF NOT EXISTS energisers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      category category NOT NULL
    );`
  );
}

// create sessions
//      id SERIAL PRIMARY KEY
//      participant_id FOREIGN KEY participants (id)
//      energiser_id FOREIGN KEY energisers (id)
//      date TIMESTAMP NOT NULL
//      points INTEGER NOT NULL

async function createSessionsTable() {
  return await query(
    `CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      participant_id INTEGER REFERENCES participants (id),
      energiser_id INTEGER REFERENCES energisers (id),
      date TIMESTAMP NOT NULL,
      points INTEGER NOT NULL
    );`
  );
}

module.exports.createAllTables = async function createAllTables() {
  await createParticipantsTable();
  await createEnergisersTable();
  await createSessionsTable();
  console.log("Should have created all tables now.");
};

if (require.main === module) {
  module.exports.createAllTables();
}

// SOME JOIN STATEMENT
//  MERGE ALL DATASETS, provide that view the user.
//  view provided to the user should not contain any ids.
