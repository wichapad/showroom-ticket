const slugify = require("slugify");
const Events = require("../models/Events");

exports.storeEvents = async (req, res) => {
  try {
    const eventsData = req.body; //รับข้อมูล events model
    const artistName = eventsData.events[0].band[0].artist; // หาค่า artist เพื่ออ้างอิงใน slug
    const slug = slugify(artistName, { lower: true });
    const newEvent = await Events.create(eventsData); // สร้าง events ใหม่

    res.status(200).json(newEvent);
    console.log("Slug ", slug);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.allEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.singleEvent = async (req, res) => {
    
  try {
    const {slug} = req.params.slug
    const events = await Events.findOne({slug:slug})
    if(!events){
        return res.status(400).json({
            message:"Event not found"
        })
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
