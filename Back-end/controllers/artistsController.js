const pool = require("../database");

// Get all data artists from sql
exports.getArtists = (req, res) => {
  const query = `SELECT * FROM artist;`;
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.singleArtist = (req, res) => {
  const slug = req.params.slug;
  const query = `SELECT * FROM artist WHERE slug = $1;`;
  pool.query(query, [slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
