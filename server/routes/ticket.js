const express = require("express");
const { getTicket, singleTicket } = require("../controllers/ticketcontroller");
const router = express.Router();

router.get("/tickets", getTicket);
router.get("/tickets/:slug", singleTicket);

module.exports = router;