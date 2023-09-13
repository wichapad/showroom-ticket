const express = require("express");
const {
  getVenues,
  singleVenue,
  createVenues,
  updateVenues,
  deleteVenues,
} = require("../controllers/venuesController");
const router = express.Router();

router.get("/venues", getVenues);
router.post("/venues/create", createVenues);
router.get("/venues/:id", singleVenue);
router.put("/venues/:id", updateVenues);
router.delete("/venues/:id", deleteVenues);

module.exports = router;
