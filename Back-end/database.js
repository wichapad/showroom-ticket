const { Pool } = require("pg");

const pool = new Pool({
  // host: "localhost",
  // user: "postgres",
  // port: process.env.DATABASE_POST,
  // password: process.env.PASSWORD_POSTGRES,
  // database: "postgres",
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

module.exports = pool;
