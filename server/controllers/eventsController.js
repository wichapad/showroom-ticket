
const slugify = require('slugify');
const Events = require('../models/Events');

exports.create = async (req, res) => {
    try {
        const eventsData = req.body; //รับข้อมูล events model
        const artistName = eventsData.events[0].band[0].artist; // หาค่า artist เพื่ออ้างอิงใน slug
        const slug = slugify(artistName, { lower: true });
        const newEvent = await Events.create(eventsData); // สร้าง events ใหม่

        res.status(201).json({
            data: newEvent,
        });
        console.log("Slug ", slug);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
    
}


