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
