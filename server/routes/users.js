const express =require('express')
const { loginUser } = require('../controllers/loginUserController')
const { storeUser } = require('../controllers/storeUserController')
const router = express.Router()

router.post('/users/register', storeUser)
router.post('/users/login', loginUser)

module.exports = router