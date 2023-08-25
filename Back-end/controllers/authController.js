// สร้าง token ระหว่าง Admin กับ Client

const JWT = require("jsonwebtoken"); //สร้าง token
const pool = require("../database");
const bcrypt = require("bcrypt");
const { expressjwt: expressjwt } = require("express-jwt"); //ตรวจสอบ token

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [email];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = result.rows[0];
    //  เปรียบเทียบ password ที่ให้ไว้ ที่ hash ไว้อยู่
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      if (email === "showroom@gmail.com") {
        const adminToken = JWT.sign(
          { id: user.id },
          process.env.ADMIN_JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).json({ user, adminToken, id: user.id });
      } else {
        const clientToken = JWT.sign(
          { id: user._id },
          process.env.CLIENT_JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).json({ user, clientToken, id: user._id });
      }
    } else {
      //password not match
      return res.status(400).json({ error: "Invalid password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Invalid server error" });
  }
};

// ตรวจสอบ token ที่ส่งมา
exports.requireAdmin = expressjwt({
  secret: process.env.ADMIN_JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
