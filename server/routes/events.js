const express = require('express')
const { storeEvents, allEvents, singleEvent, updateEvents } = require('../controllers/eventsController')
const router = express.Router()

router.get('/events', allEvents)
router.get('/events/:slug', singleEvent)
router.post('/events/addevent' , storeEvents)
router.put('/events/:slug', updateEvents)

module.exports = router