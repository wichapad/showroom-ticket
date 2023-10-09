// poatgresql
const pool = require("../database");

exports.createEvent = async (req, res) => {
  try {
    const events = req.body;
    const createdEvents = await Promise.all(
      events.map(async (event) => {
        const { event_name, event_date, event_time, artist_id, venue_id } =
          event;
        const query = `INSERT INTO event (event_name, event_date, event_time, artist_id, venue_id) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
        const values = [
          event_name,
          event_date,
          event_time,
          artist_id,
          venue_id,
        ];
        const result = await pool.query(query, values);
        return result.rows[0];
      })
    );
    res.json(createdEvents);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

// Update events
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { event_name, event_date, event_time, artist_id, venue_id } =
      req.body;
    const query = `UPDATE event 
        SET  event_name = $1, event_date = $2, event_time = $3, artist_id = $4, venue_id = $5 
        WHERE event_id = $6
        RETURNING *`;
    const values = [
      event_name,
      event_date,
      event_time,
      artist_id,
      venue_id,
      id,
    ];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const updateEvent = result.rows[0];
      res.json(updateEvent);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.allEvents = (req, res) => {
  const query = `SELECT * FROM event;`;
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

// Get data single event of artsit
exports.singleEventByEventId = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM event WHERE event_id = $1;`;
  pool.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

// Update events
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `DELETE FROM event WHERE event_id = $1 RETURNING *`;
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const deleteEvent = result.rows[0];
      res.json({ message: "Delete event successfully", event: deleteEvent });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
