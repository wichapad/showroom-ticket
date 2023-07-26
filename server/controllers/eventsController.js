// const slugify = require("slugify");
// const Events = require("../models/Events");

// exports.storeEvents = async (req, res) => {
//   try {
//     const eventsData = req.body; //รับข้อมูล events model
//     const artistName = eventsData.band.artist; // หาค่า artist เพื่ออ้างอิงใน slug
//     const slug = slugify(artistName);

//     const event = await Events.create({ ...eventsData, slug }); // สร้าง events ใหม่ โดยกำหนด slug

//     res.status(200).json({ event });
//   } catch (error) {
//     res.status(400).json({
//       error: "Please complete the info"
//     });
//   }
// };

// exports.allEvents = async (req, res) => {
//   try {
//     const event = await Events.find();
//     res.status(200).json({ event });
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };

// exports.singleEvent = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     const event = await Events.findOne({ slug });
//     if (!event) {
//       return res.status(400).json({
//         message: "Event not found",
//       });
//     }
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };

// exports.removeEvents = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     const event = await Events.findOneAndDelete({ slug });

//     res.json({message:"Delete Complete"});
//   } catch (error) {
//     res.status(400).json({
//       error: error.message,
//     });
//   }
// };

// exports.updateEvents = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     const eventsData = req.body;

//     const updateEvent = await Events.findOneAndUpdate({ slug }, eventsData, {
//       new: true,
//     });

//     if (!updateEvent) {
//       //ถ้าไม่พบ events ที่ตรงกับ slug
//       return res.status(400).json({
//         message: "Event not found",
//       });
//     }

//     res.status(200).json({ updateEvent });
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// };

const pool = require("../database");

exports.getEvent = (req, res) => {
  const query = `SELECT
  a.artist_id,
  a.artist_name,
  g.genre_name,
  a.artist_image,
  a.slug,
  json_agg(json_build_object('event_name', e.event_name, 'date',e.event_date,'time' ,e.event_time)) AS events,
  json_agg(json_build_object('venue_name', v.venue_name, 'city',v.venue_city,'state' ,v.venue_state)) AS venues
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
