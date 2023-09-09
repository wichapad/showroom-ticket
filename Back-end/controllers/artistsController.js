const pool = require("../database");

exports.createArtists = async (req, res) => {
  try {
    const { artist_name, genre_id, artist_image } = req.body;
    const query = `INSERT INTO artist(artist_name, genre_id, artist_image) VALUES ($1,$2,$3) RETURNING *`;
    const values = [artist_name, genre_id, artist_image];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

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

exports.getGenre = (req, res) => {
  const query = `SELECT * FROM genre;`;
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.updateArtists = async (req, res) => {
  try {
    const { slug } = req.params;
    const { artist_name, genre_id, artist_image } = req.body;
    const query = `UPDATE artist set artist_name=$1, genre_id=$2, artist_image=$3 
    WHERE slug = $4 RETURNING *`;
    const values = [artist_name, genre_id, artist_image, slug];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const updateArtists = result.rows[0];
      res.json(updateArtists);
    } else {
      res.status(404).json({ error: "Arists not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.deleteArtists = async (req, res) => {
  try {
    const { slug } = req.params;
    const query = `DELETE FROM artist WHERE slug = $1 RETURNING *`;
    const values = [slug];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const deleteArtist = result.rows[0];
      res.json({ message: "Delete artist successfully", artist: deleteArtist });
    } else {
      res.status(404).json({ error: "Arists not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
