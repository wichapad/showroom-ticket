const express = require('express')
const { create } = require('../controllers/eventsController')
const router = express.Router()

router.post('/events/create' ,create)

module.exports = router