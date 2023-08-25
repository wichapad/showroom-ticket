const express = require("express");
const {
  getTicket,
  singleZone,
  seatRow,
} = require("../controllers/ticketcontroller");
const router = express.Router();

router.get("/tickets", getTicket);
router.get("/tickets/:slug", singleZone);
router.get("/tickets/:slug/:id", seatRow);

module.exports = router;
