const pool = require("../database");

exports.getTicket = (req, res) => {
  const slug = req.params.slug
  const query = `SELECT 
    t.ticket_id,
	t.serial_number,
	json_agg(json_build_object('seat',t.seat,'event_name',e.event_name,'event_slug',e.slug_event,'description',ctgy.description,'purchase_date',t.purchase_date)) AS details
	FROM ticket t
	JOIN event e ON t.event_id = e.event_id
	JOIN ticket_category ctgy ON t.ticket_ctgy_id = ctgy.ticket_ctgy_id
	GROUP BY
	t.ticket_id,
	t.serial_number;
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
  const slug = req.params.slug
  const query = `SELECT 
    t.ticket_id,
	t.serial_number,
	json_agg(json_build_object('seat',t.seat,'event_name',e.event_name,'event_slug',e.slug_event,'description',ctgy.description,'purchase_date',t.purchase_date)) AS details
	FROM ticket t
	JOIN event e ON t.event_id = e.event_id
	JOIN ticket_category ctgy ON t.ticket_ctgy_id = ctgy.ticket_ctgy_id
  WHERE e.slug_event = $1
	GROUP BY
	t.ticket_id,
	t.serial_number;
	`;

  pool.query(query,[slug], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result.rows);
    }
  });
};
