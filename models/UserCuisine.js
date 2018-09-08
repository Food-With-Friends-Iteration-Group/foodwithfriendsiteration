const db = require('../dbConfig');

module.exports = {
  findAll: () => {
    return db.any(`
    SELECT * FROM "user_cuisine"`);
  },

  //TODO: Have entires in table be temporary
  create: (user_id, cuisine_id) => {
    return db.one(`
      INSERT INTO "user_cuisine"(user_id, cuisine_id)
      VALUES ($1, $2)
      RETURNING *
    `, [user_id, cuisine_id])
  },
}