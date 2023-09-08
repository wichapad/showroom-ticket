const express = require("express");
const {
  createEvent,
  updateEvent,
  singleEventByArtistId,
  allEvents,
} = require("../controllers/eventsController");
const { requireAdmin } = require("../controllers/authController");

const router = express.Router();

router.post("/events/create", createEvent);
router.get("/events", allEvents);
router.get("/events/:id", singleEventByArtistId);
router.put("/events/:id", updateEvent);

module.exports = router;
