const express = require("express");
const { getEvent } = require("../controllers/eventsController");
const router = express.Router();

router.get("/events", getEvent);

module.exports = router;
