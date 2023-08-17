const express = require("express");
const { getTicket, singleZone } = require("../controllers/ticketcontroller");
const router = express.Router();

router.get("/tickets", getTicket);
router.get("/tickets/:slug", singleZone);

module.exports = router;