const express =require('express')
const { storeUser } = require('../controllers/storeUserController')
const router = express.Router()

router.post('/users/register', storeUser)


module.exports = router