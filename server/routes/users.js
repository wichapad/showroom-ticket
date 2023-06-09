const express =require('express')
const { register } = require('../controllers/registerController')
const { login } = require('../controllers/loginController')
const { storeUser } = require('../controllers/storeUserController')
const router = express.Router()

router.get('/login', login)
router.get('/register', register)
router.post('/users/register', storeUser)

module.exports = router