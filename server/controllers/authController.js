// สร้าง token ระหว่าง Admin กับ Client

const JWT = require("jsonwebtoken"); //สร้าง token
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const { expressjwt: expressjwt } = require("express-jwt"); //ตรวจสอบ token

exports.login = (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      //เปรียบเทียบ password ที่ให้ไว้ ที่ hash ไว้อยู่
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          if (email === "showroom@gmail.com") {
            const adminToken = JWT.sign(
              { _id: user._id },
              process.env.ADMIN_JWT_SECRET,
              {
                expiresIn: "1d",
              }
            );
            return res.status(200).json({ user, adminToken, _id: user._id });
          } else {
            const clientToken = JWT.sign(
              { _id: user._id },
              process.env.CLIENT_JWT_SECRET,
              {
                expiresIn: "1d",
              }
            );
            return res.status(200).json({ user, clientToken, _id: user._id });
          }
        } else {
          //password not match
          return res.status(400).json({ error: "Invalid password" });
        }
      });
    })
    .catch((err) => {
      return res.status(500).json({ error: "Invalid server error" });
    });
};

// ตรวจสอบ token ที่ส่งมา
exports.requireAdmin = expressjwt({
  secret: process.env.ADMIN_JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});


