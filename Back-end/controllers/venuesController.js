const pool = require("../database");

// Get all data venues from sql
exports.getVenues = (req, res) => {
  const query = `SELECT * FROM venue;`;
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.singleVenue = (req, res) => {
  const city = req.params.city;
  const query = `SELECT * FROM venue WHERE venue_city = $1;`;
  pool.query(query, [city], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
