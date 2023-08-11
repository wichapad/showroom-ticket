

SELECT
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug,
  json_agg(json_build_object('event_id', e.event_id ,'event_name', e.event_name, 'date',e.event_date,'time' ,e.event_time)) AS event,
  json_agg(json_build_object('venue_id', v.venue_id, 'venue_name', v.venue_name, 'city',v.venue_city,'state' ,v.venue_state)) AS venue
  FROM artist a
  JOIN event e ON a.artist_id = e.artist_id
  JOIN venue v ON e.venue_id = v.venue_id
  JOIN genre g ON a.genre_id = g.genre_id
  WHERE a.slug = 'bring-me-the-horizon'
  GROUP BY
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug; 

-- SELECT * FROM event;
-- SELECT * FROM venue;
-- SELECT * FROM artist;
  