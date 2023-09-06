const express = require("express");
const { getVenues, singleVenue } = require("../controllers/venuesController");
const router = express.Router();

router.get("/venues", getVenues);
router.get("/venues/:city", singleVenue);

module.exports = router;
