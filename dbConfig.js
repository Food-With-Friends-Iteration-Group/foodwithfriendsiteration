require('dotenv').config();

const pgp = require('pg-promise')();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
};

const db = pgp(config);

module.exports= db;