const pool = require("../database");

exports.createVenues = async (req, res) => {
  try {
    const venues = req.body;
    const createdVenues = await Promise.all(
      venues.map(async (venue) => {
        const { venue_name, venue_city, venue_state, venue_capacity } = venue;
        const query = `INSERT INTO venue (venue_name,venue_city,venue_state,venue_capacity) VALUES ($1,$2,$3,$4) RETURNING *`;
        const values = [venue_name, venue_city, venue_state, venue_capacity];
        const result = await pool.query(query, values);
        return result.rows[0];
      })
    );
    res.json(createdVenues);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.updateVenues = async (req, res) => {
  try {
    const { id } = req.params;
    const { venue_name, venue_city, venue_state, venue_capacity } = req.body;
    const query = `UPDATE venue SET venue_name =$1, venue_city =$2, venue_state = $3, venue_capacity=$4 WHERE venue_id=$5 RETURNING *`;
    const values = [venue_name, venue_city, venue_state, venue_capacity, id];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const updateVenues = result.rows[0];
      res.json(updateVenues);
    } else {
      res.status(404).json({ error: "Venues not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

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
  const id = req.params.id;
  const query = `SELECT * FROM venue WHERE venue_id = $1;`;
  pool.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.deleteVenues = async (req,res) =>{
  try {
    const { id } = req.params;
    const query = `DELETE FROM venue WHERE venue_id = $1 RETURNING *`
    const values = [id]
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const deleteVenue = result.rows[0];
      res.json({ message: "Delete venue successfully", venue: deleteVenue });
    } else {
      res.status(404).json({ error: "Arists not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
}
