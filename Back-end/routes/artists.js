const express = require("express");
const {
  getArtists,
  singleArtist,
  getGenre,
} = require("../controllers/artistsController");
const router = express.Router();

router.get("/artists", getArtists);
router.get("/artists/:slug", singleArtist);
router.get("/genres", getGenre);
module.exports = router;
