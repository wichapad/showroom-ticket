const JWT = require("jsonwebtoken");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");



exports.login = (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      //เปรียบเทียบ password ที่ให้ไว้ ที่ hash ไว้อยู่
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        if (result) {
          let adminToken;
          let clientToken;
          //Admin Token
          if (email === "showroom@gmail.com") {
            adminToken = JWT.sign(
              { _id: user._id },
              process.env.ADMIN_JWT_SECRET,
              { expiresIn: "1d" }
            );
          } else {
            //Client Token
            clientToken = JWT.sign(
              { _id: user._id },
              process.env.CLIENT_JWT_SECRET,
              { expiresIn: "1d" }
            );
          }
          if (email === "showroom@gmail.com") {
            return res.status(200).json({ adminToken, _id: user._id });
          } else {
            return res.status(200).json({ clientToken, _id: user._id });
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

