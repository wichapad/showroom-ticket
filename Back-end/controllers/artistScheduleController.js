// Match database between table artist,event,venue in order to get information tourschedule
const pool = require('../database')

exports.getartistSchedule = (req, res) => {
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
  
  exports.getartistScheduleByslug = (req, res) => {
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