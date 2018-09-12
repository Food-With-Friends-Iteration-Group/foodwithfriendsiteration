const db = require("../dbConfig");

module.exports = {
  findAllUsers: () => {
    return db.any(`
      SELECT * FROM "user"`);
  },

  createUser: user => {
    return db.one(
      `
    INSERT INTO "user" (email, password_digest) 
    VALUES ($/email/, $/password_digest/)
    RETURNING *`,
      user
    );
  },

  findByEmail: email => {
    return db.one(
      `
    SELECT * 
    FROM "user" 
    WHERE email = $1`,
      email
    );
  },

  deleteUsers: () => {
    return db.query(`
    DELETE FROM user; 
    `);
  }
};
