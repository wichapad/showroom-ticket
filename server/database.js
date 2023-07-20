const { Pool } =require('pg')

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: process.env.PASSWORD_POSTGRES,
  database: "postgres",
});

module.exports = pool