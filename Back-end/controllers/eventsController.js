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

exports.updateEvent = async (req, res) => {
  try {
    const events = req.body;
    const updateEvents = await Promise.all(
      events.map(async (event) => {
        const {
          event_id,
          event_name,
          event_date,
          event_time,
          artist_id,
          venue_id,
        } = event;
        const query = `UPDATE event 
        SET event_name = $1, event_date = $2, event_time = $3, artist_id = $4, venue_id = $5 
        WHERE event_id = $6
        RETURNING *`;
        const values = [
          event_name,
          event_date,
          event_time,
          artist_id,
          venue_id,
          event_id,
        ];
        const result = await pool.query(query, values);
        return result.rows[0];
      })
    );
    res.json(updateEvents);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

// Get all data join table artist event venue
exports.getEvent = (req, res) => {
  const query = `SELECT
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug,
  json_agg(json_build_object('event_id', e.event_id ,'event_name', e.event_name, 'date',e.event_date,'time' ,e.event_time ,'slug_event', e.slug_event,'venue_id', v.venue_id, 'venue_name', v.venue_name, 'city',v.venue_city,'state' ,v.venue_state)) AS events
  FROM artist a
  JOIN event e ON a.artist_id = e.artist_id
  JOIN venue v ON e.venue_id = v.venue_id
  JOIN genre g ON a.genre_id = g.genre_id
  GROUP BY
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

// Get single data by slug join table artist event venue
exports.singleEvent = (req, res) => {
  const slug = req.params.slug;
  const query = `SELECT
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug,
  json_agg(json_build_object('event_id', e.event_id ,'event_name', e.event_name, 'date',e.event_date,'time' ,e.event_time ,'slug_event', e.slug_event,'venue_id', v.venue_id, 'venue_name', v.venue_name, 'city',v.venue_city,'state' ,v.venue_state)) AS events
  FROM artist a
  JOIN event e ON a.artist_id = e.artist_id
  JOIN venue v ON e.venue_id = v.venue_id
  JOIN genre g ON a.genre_id = g.genre_id
  WHERE a.slug = $1
  GROUP BY
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug;
  `;
  pool.query(query, [slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Event not found" });
      } else {
        res.json(result.rows);
      }
    }
  });
};

