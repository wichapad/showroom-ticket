const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  getUserByEmail,
  updateUsersByEmail,
  deleteUsers,
} = require("../controllers/storeUserController");
const { requireAdmin } = require("../controllers/authController");


router.get("/users", getUsers);
router.post("/users/create", createUsers);
router.get("/users/:name", getUserByEmail);
router.put("/users/:email", updateUsersByEmail);
router.delete("/users/:email", deleteUsers);

module.exports = router;
