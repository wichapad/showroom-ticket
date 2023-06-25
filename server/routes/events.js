const express = require('express')
const { storeEvents, allEvents, singleEvent } = require('../controllers/eventsController')
const router = express.Router()

router.get('/events/allevents', allEvents)
router.get('/events/singleevent/:slug', singleEvent)
router.post('/events/addevent' , storeEvents)

module.exports = router