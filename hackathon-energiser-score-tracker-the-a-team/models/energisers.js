const { query } = require("../db/index");

// GET /energisers
async function getAllEnergisers() {
  const response = await query("SELECT * FROM energisers;");
  return response.rows;
}

// GET /energisers?name= name
async function getEnergisersByName(partialName) {
  const response = await query(
    "SELECT * FROM energisers WHERE name ~~* ('%' || $1 || '%');",
    [partialName]
  );
  return response.rows;
}

// POST /energisers (to create an energiser)
async function createOneEnergiser({ name, category }) {
  const response = await query(
    `INSERT INTO energisers (name, category)
            VALUES ($1, $2) RETURNING *;`,
    [name, category]
  );
  return response.rows[0];
}

if (require.main === module) {
}

//

module.exports = {
  createOneEnergiser,
  getAllEnergisers,
  getEnergisersByName,
};
