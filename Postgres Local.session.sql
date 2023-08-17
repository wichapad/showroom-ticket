

SELECT
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
  'price',ctgy.price)) AS zone,
  json_agg(json_build_object('ticket',t.seat)) AS seat
  FROM event e
  JOIN ticket_category ctgy ON ctgy.event_id = e.event_id
  JOIN artist a ON a.artist_id = e.artist_id
  JOIN venue v ON v.venue_id = e.venue_id
  JOIN ticket t ON t.event_id = e.event_id
  WHERE slug_event = '6a561a24'
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

-- SELECT * FROM event;
-- SELECT * FROM venue;
-- SELECT * FROM artist;
  