const express = require("express");
const {
  getEvent,
  singleEvent,
  createEvent,
  updateEvent,
  singleEventByArtistId,
} = require("../controllers/eventsController");
const { requireAdmin } = require("../controllers/authController");

const router = express.Router();

// Route get all data events only show data front-end
router.get("/events", getEvent);
router.get("/events/artist/:slug", singleEvent);


// Route post data to database in progreSQL
router.post("/events/create", createEvent);
router.get("/events/id/:id", singleEventByArtistId);
router.put("/events/artist/:slug", updateEvent);

module.exports = router;
