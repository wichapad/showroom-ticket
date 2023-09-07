// Route of artstisSchedule controller
const express = require("express");
const { getartistSchedule } = require("../controllers/artistScheduleController");

const router = express.Router();

router.get("/tour", getartistSchedule);
router.get("/tour/:slug", getartistSchedule);

module.exports = router;
