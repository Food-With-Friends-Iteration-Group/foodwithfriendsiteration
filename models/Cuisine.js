const db = require('../dbConfig');

module.exports = {

  findAll: () => {
    return db.any(`
      SELECT * FROM "cuisine"`);
  },

  findOne: (type) => {
    return db.one(`
      SELECT id FROM "cuisine" WHERE type = $1
    `, type)
  },

}
