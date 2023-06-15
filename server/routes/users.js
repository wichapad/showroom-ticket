const express = require('express')
const { storeUser, removeUser, getallUsers, getOneUsers } = require('../controllers/storeUserController')
const router = express.Router()

router.get('/users/allusers', getallUsers)
router.get('/users/:email', getOneUsers)
router.post('/users/register', storeUser)
router.delete('/users/:email', removeUser)


module.exports = router