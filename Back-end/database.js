const { Pool } = require("pg");

const pool = new Pool({
  // host: "localhost",
  // user: "postgres",
  // port: process.env.DATABASE_POST,
  // password: process.env.PASSWORD_POSTGRES,
  // database: "postgres",
  connectionString: process.env.DATABASE_HOST,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
