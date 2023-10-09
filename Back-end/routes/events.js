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

router.post("/events/create", requireAdmin, createEvent);
router.get("/events", allEvents);
router.get("/events/:id", singleEventByEventId);
router.put("/events/:id", requireAdmin, updateEvent);
router.delete("/events/:id", requireAdmin, deleteEvent);

module.exports = router;
