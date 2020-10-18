const { createAllTables } = require("./createTables");
const { dropAllTables } = require("./dropTables");
const { populateAllTables } = require("./populateTables");

async function reinitialiseAllTables() {
  await dropAllTables();
  await createAllTables();
  await populateAllTables();
  console.log("Should have reinitialised all tables now.");
}

if (require.main === module) {
  reinitialiseAllTables();
}
