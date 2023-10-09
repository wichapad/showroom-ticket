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
router.post("/users/create", requireAdmin, createUsers);
router.get("/users/:email", getUserByEmail);
router.put("/users/:email", requireAdmin, updateUsersByEmail);
router.delete("/users/:email", requireAdmin, deleteUsers);

module.exports = router;
