const express = require("express");
const {
  createEvent,
  updateEvent,
  singleEventByEventId,
  allEvents,
  deleteEvent,
} = require("../controllers/eventsController");
const { requireAdmin } = require("../controllers/authController");

const router = express.Router();

router.post("/events/create", createEvent);
router.get("/events", allEvents);
router.get("/events/:id", singleEventByEventId);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
