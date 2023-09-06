const express = require("express");
const {
  getEvent,
  singleEvent,
  createEvent,
  updateEvent,
} = require("../controllers/eventsController");
const { requireAdmin } = require("../controllers/authController");

const router = express.Router();

// Route get all data events
router.get("/events", getEvent);
router.get("/events/:slug", singleEvent);

// Route post data to database in progreSQL
router.post("/events/create", createEvent);
router.put("/events/:slug", updateEvent);



module.exports = router;
