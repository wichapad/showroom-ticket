const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//โครงสร้าง ฐานข้อมูล
const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// middleware hash รหัสผ่าน ก่อนบันทึกข้อมูล
UserSchema.pre("save", function (next) {
  const user = this;

  bcrypt
    .hash(user.password, bcrypt.genSaltSync(10), null)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((error) => {
      console.log(error);
    });
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
