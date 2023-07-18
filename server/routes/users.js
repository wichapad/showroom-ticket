const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/storeUserController");

// router.get('/users/allusers', getallUsers)
// router.get('/users/:email', getOneUsers)
// router.post('/users/register', storeUser)
// router.delete('/users/:email', removeUser)

// module.exports = router

router.get("/users", getUsers);

module.exports = router
