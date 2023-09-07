const express = require("express");
const {

  createEvent,
  updateEvent,
  singleEventByArtistId,
} = require("../controllers/eventsController");
const { requireAdmin } = require("../controllers/authController");

const router = express.Router();

router.post("/events/create", createEvent);
router.get("/events/:slug", singleEventByArtistId);
router.put("/events/:id", updateEvent);

module.exports = router;
