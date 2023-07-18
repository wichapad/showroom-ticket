const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  getUserByEmail,
  updateUsersByEmail,
  deleteUsers,
} = require("../controllers/storeUserController");

// router.get('/users/allusers', getallUsers)
// router.get('/users/:email', getOneUsers)
// router.post('/users/register', storeUser)
// router.delete('/users/:email', removeUser)

// module.exports = router

router.get("/users", getUsers);
router.post("/create", createUsers);
router.get("/users/:email", getUserByEmail);
router.put("/users/:email", updateUsersByEmail);
router.delete("/users/:email", deleteUsers);

module.exports = router;
