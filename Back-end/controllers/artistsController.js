const pool = require("../database");

// Get all data artists from sql
exports.getArtists = (req, res) => {
  const query = `SELECT 
  artist.artist_id, artist.artist_name, artist.genre_id, artist.artist_image, genre.genre_name
  FROM artist
  JOIN genre ON genre.genre_id = artist.genre_id;`;
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
  const query = `SELECT 
  artist.artist_id, artist.artist_name, artist.genre_id, artist.artist_image, genre.genre_name
  FROM artist
  JOIN genre ON genre.genre_id = artist.genre_id WHERE slug = $1;`;
  pool.query(query, [slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
