// Route of artstisSchedule controller
const express = require("express");
const { getartistSchedule, getartistScheduleByslug } = require("../controllers/artistScheduleController");

const router = express.Router();

router.get("/tour", getartistSchedule);
router.get("/tour/:slug", getartistScheduleByslug);

module.exports = router;
