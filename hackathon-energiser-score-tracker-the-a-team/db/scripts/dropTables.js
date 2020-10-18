const { query } = require("../index");

async function dropEnergisersTable() {
  return await query(
    `DROP TABLE IF EXISTS energisers;
    DROP TYPE IF EXISTS category;`
  );
}

async function dropParticipantsTable() {
  return await query("DROP TABLE IF EXISTS participants;");
}

async function dropSessionsTable() {
  return await query("DROP TABLE IF EXISTS sessions;");
}

module.exports.dropAllTables = async function dropAllTables() {
  await dropSessionsTable();
  await dropEnergisersTable();
  await dropParticipantsTable();
  console.log("Should have dropped all tables now.");
};

if (require.main === module) {
  module.exports.dropAllTables();
}
