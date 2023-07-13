const express = require("express");
const {
  storeEvents,
  allEvents,
  singleEvent,
  updateEvents,
  removeEvents,
} = require("../controllers/eventsController");
const router = express.Router();

router.get("/events",  allEvents);
router.get("/events/:slug", singleEvent);
router.post("/events/addevent", storeEvents);
router.put("/events/:slug", updateEvents);
router.delete("/events/:slug", removeEvents);
module.exports = router;
