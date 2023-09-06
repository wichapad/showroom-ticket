const express = require("express");
const {
  getArtists,
  singleArtist,
} = require("../controllers/artistsController");
const router = express.Router();

router.get("/artists", getArtists);
router.get("/artists/:slug", singleArtist);
module.exports = router;
