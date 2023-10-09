const express = require("express");
const {
  getArtists,
  singleArtist,
  getGenre,
  createArtists,
  updateArtists,
  deleteArtists,
} = require("../controllers/artistsController");
const router = express.Router();

router.get("/artists", getArtists);
router.post("/artists/create", createArtists);
router.get("/artists/:slug", singleArtist);
router.put("/artists/:slug", updateArtists);
router.delete("/artists/:slug", deleteArtists);
router.get("/genres", getGenre);
module.exports = router;
