// ---- PostgreSQL -----
const pool = require('../database')
const bcrypt = require("bcrypt");



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
    const query = `INSERT INTO users(email, password, name, phone, address, city, zipcode) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;
    const values = [email, hashedPassword, name, phone, address, city, zipcode];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

// ดูข้อมูล one user ใน database ด้วย email
exports.getUserByEmail = async (req, res) => {
  try {
    const { name } = req.params;
    const query = `SELECT * FROM users WHERE name = $1;`;
    const value = [name];
    const result = await pool.query(query, value);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

//Update ข้อมูล user ใน database ผ่าน email
exports.updateUsersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const { name, phone, address, city, zipcode } = req.body;
    const query = `UPDATE users 
        set name=$1 ,phone=$2 ,address=$3,city=$4,zipcode=$5
        WHERE email =$6
        RETURNING *
        `;
    const values = [name, phone, address, city, zipcode, email];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const updateUser = result.rows[0];
      res.json(updateUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

// ลบข้อมูล user
exports.deleteUsers = async (req, res) => {
  try {
    const { email } = req.params;
    const query = `DELETE FROM users
        WHERE email = $1 RETURNING *`;
    const values = [email];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const deleteUsers = result.rows[0];
      res.json({ message: "Delete successfully", deleteUsers });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
