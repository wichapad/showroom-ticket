// //รับข้อมูล เพิ่มลง Database
// const Users = require('../models/Users')

// exports.storeUser = (req, res) => {
//     const { email, username, password } = req.body

//     //check validate data
//     if (!email) {
//         return res.status(400).json({ error: "Please enter an email" })
//     } if (!username) {
//         return res.status(400).json({ error: "Please enter an username" })
//     } if (!password) {
//         return res.status(400).json({ error: "Please enter an password" })
//     }

//     //save data
//     Users.create({ email, username, password })
//         .then((user) => {
//             res.json(user)
//         })
//         .catch((err) => {
//             res.status(400).json({ error: "Users available" })
//         })
// }

// exports.getallUsers = (req, res) => {
//     Users.find({})
//         .then((user) => {
//             res.json(user)
//         })
//         .catch((err) => {
//             res.status(400).json({ error: "Get all user not woking" })
//         })
// }
// exports.getOneUsers = (req, res) => {
//     const {email} = req.params;
//     Users.findOne({email})
//         .then((user) => {
//             res.json(user)
//         })
//         .catch((err) => {
//             res.status(400).json({ error: "Get all user not woking" })
//         })

// }

// exports.removeUser = (req, res) => {
//     const { email } = req.params;
//     Users.findOneAndRemove({ email })
//         .then((user) => {
//             res.json({ error: "Users Delete success" })
//         })

// }

// ---- PostgreSQL -----
const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: process.env.PASSWORD_POSTGRES,
  database: "postgres",
});

//ขอข้อมูล data users ทั้งหมด
exports.getUsers = (req, res) => {
  pool.query(`SELECT * FROM users`, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

// Function เข้ารหัสผ่านก่อน บันทึกลง Database
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Create new user ลง database
exports.createUsers = async (req, res) => {
  try {
    const { email, password, name, phone, address, city, zipcode } = req.body;
    const hashedPassword = await hashPassword(password);
    const query = `INSERT INTO users(email, password, name, phone, address, city, zipcode) VALUE ($1,$2,$3,$4,$5,$6,$7) RETURNING`;
    const values = [email, hashedPassword, name, phone, address, city, zipcode];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
