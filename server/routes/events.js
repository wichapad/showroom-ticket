const express = require("express");
const {
  getEvent,
  singleEvent,
  getArtists,
  getVenues,
  createEvent,
  updateEvent,
} = require("../controllers/eventsController");
const router = express.Router();

// Route get all data events
router.get("/events", getEvent);
router.get("/events/:slug", singleEvent);

// Route post data to database in progreSQL
router.post("/events/create", createEvent);
router.put("/events/:slug", updateEvent);

// Route get data artist and venue
router.get("/artists", getArtists);
router.get("/venues", getVenues);

module.exports = router;
