const express = require("express");
const {
  getArtists,
  singleArtist,
  getGenre,
  createArtists,
  updateArtists,
  deleteArtists,
} = require("../controllers/artistsController");
const { requireAdmin } = require("../controllers/authController");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/artists/create", requireAdmin, createArtists);
router.get("/artists/:slug", singleArtist);
router.put("/artists/:slug", requireAdmin, updateArtists);
router.delete("/artists/:slug", requireAdmin, deleteArtists);
router.get("/genres", getGenre);
module.exports = router;
