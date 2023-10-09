const express = require("express");
const {
  getVenues,
  singleVenue,
  createVenues,
  updateVenues,
  deleteVenues,
} = require("../controllers/venuesController");
const { requireAdmin } = require("../controllers/authController");
const router = express.Router();

router.get("/venues", getVenues);
router.post("/venues/create", requireAdmin, createVenues);
router.get("/venues/:id", singleVenue);
router.put("/venues/:id", requireAdmin, updateVenues);
router.delete("/venues/:id", requireAdmin, deleteVenues);

module.exports = router;
