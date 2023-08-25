const pool = require("../database");

exports.getTicket = (req, res) => {
  const query = `SELECT
  e.event_id,
	e.event_name,
	e.event_date,
	e.event_time,
  e.slug_event,
  v.venue_name,
  v.venue_city,
  v.venue_state,
  a.artist_name,
  a.artist_image,
  json_agg(json_build_object(
  'ctgy_id',ctgy.ticket_ctgy_id,
  'description',ctgy.description,
  'area',ctgy.area,
  'price',ctgy.price)) AS zone
  FROM event e
  JOIN ticket_category ctgy ON ctgy.event_id = e.event_id
  JOIN artist a ON a.artist_id = e.artist_id
  JOIN venue v ON v.venue_id = e.venue_id
  GROUP BY
  e.event_id,
  e.event_name,
	e.event_date,
	e.event_time,
  e.slug_event,
  v.venue_name,
  v.venue_city,
  v.venue_state,
  a.artist_name,
  a.artist_image;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.singleZone = (req, res) => {
  const slug = req.params.slug;
  const query = `SELECT
  e.event_id,
	e.event_name,
	e.event_date,
	e.event_time,
  e.slug_event,
  v.venue_name,
  v.venue_city,
  v.venue_state,
  a.artist_name,
  a.artist_image,
  json_agg(json_build_object(
  'ctgy_id',ctgy.ticket_ctgy_id,
  'description',ctgy.description,
  'area',ctgy.area,
  'price',ctgy.price)) AS zone
  FROM event e
  JOIN ticket_category ctgy ON ctgy.event_id = e.event_id
  JOIN artist a ON a.artist_id = e.artist_id
  JOIN venue v ON v.venue_id = e.venue_id
  WHERE slug_event = $1
  GROUP BY
  e.event_id,
  e.event_name,
	e.event_date,
	e.event_time,
  e.slug_event,
  v.venue_name,
  v.venue_city,
  v.venue_state,
  a.artist_name,
  a.artist_image;
	`;

  pool.query(query, [slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

// ticketcontroller.js
exports.seatRow = (req, res) => {
  const id = req.params.id;
  const slug = req.params.slug;

  const query = `
  SELECT
  e.event_id,
  e.event_date,
  e.event_time,
 ctgy.ticket_ctgy_id,
  e.slug_event,
  json_agg(json_build_object(
    'ticket_id', t.ticket_id,
    'seat', t.seat,
    'price', ctgy.price
  )) AS seats
FROM ticket t
JOIN event e ON e.event_id = t.event_id
JOIN ticket_category ctgy ON ctgy.ticket_ctgy_id = t.ticket_ctgy_id
WHERE ctgy.ticket_ctgy_id = $1
AND e.slug_event = $2
GROUP BY e.event_id,e.event_date, e.event_time, ctgy.ticket_ctgy_id, ctgy.price;

  `;

  pool.query(query, [id, slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
