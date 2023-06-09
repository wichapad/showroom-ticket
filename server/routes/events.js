const express = require("express");
const {
 
  allEvents,
  singleEvent,
  
} = require("../controllers/eventsController");
const router = express.Router();

router.get("/events",  allEvents);
router.get("/events/:slug", singleEvent);
module.exports = router;
