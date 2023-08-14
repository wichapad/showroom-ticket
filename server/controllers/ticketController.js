const pool = require("../database");

exports.getTicket = (req, res) => {
  
  const query = `SELECT
    e.event_id,
    e.event_name,
    e.event_date,
    e.event_time,
    e.slug_event,
    json_agg(json_build_object('ticket_id',t.ticket_id,'serial_number',t.serial_number,'seat',t.seat,'description',ctgy.description,'purchase_date',t.purchase_date)) AS details
    FROM event e
    JOIN ticket t ON t.event_id = e.event_id
    JOIN ticket_category ctgy ON t.ticket_ctgy_id = ctgy.ticket_ctgy_id
    GROUP BY
    e.event_id,
    e.event_name,
    e.event_date,
    e.event_time,
    e.slug_event;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};

exports.singleTicket = (req, res) => {
  const slug = req.params.slug;
  const query = `SELECT
  e.event_id,
  e.event_name,
  e.event_date,
  e.event_time,
  e.slug_event,
  json_agg(json_build_object('ticket_id',t.ticket_id,'serial_number',t.serial_number,'seat',t.seat,'description',ctgy.description,'purchase_date',t.purchase_date)) AS details
  FROM event e
  JOIN ticket t ON t.event_id = e.event_id
  JOIN ticket_category ctgy ON t.ticket_ctgy_id = ctgy.ticket_ctgy_id
  WHERE e.slug_event = $1
  GROUP BY
  e.event_id,
  e.event_name,
  e.event_date,
  e.event_time,
  e.slug_event;
	`;

  pool.query(query, [slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
