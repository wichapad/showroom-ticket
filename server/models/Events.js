const mongoose = require('mongoose')


const EventsSchema = mongoose.Schema({
    events: [
        {
            band: [
                {
                    artist: { type: String, required: true },
                    desctiption: { type: String },
                    genre: { type: String, required: true },
                }
            ],
            images: [
                {
                    band_image: { type: String, required: true },
                    poster_image: { type: String, required: true },
                }
            ],
            showschedule: [
                {
                    dates: [
                        {
                            localDate: { type: Date, required: true },
                            localTime: { type: String, required: true },
                            dateTime: { type: Date, required: true },
                        }
                    ],
                    timezone: [
                        {
                            state: { type: String, required: true },
                            city: { type: String, required: true },
                        }
                    ]
                }
            ],
            ticket: [
                {
                    ticket_type: { type: String, required: true },
                    ticket_price: { type: Number, required: true },
                },
            ],
            products: [
                {
                    product_name: { type: String, required: true },
                    product_detail: { type: String, required: true },
                    images_product: [
                        {
                            album_image: { type: String },
                            shop_image: { type: String },
                        }
                    ],
                    product_price: { type: Number, required: true }
                }
            ]
        }
    ]
},{ timestamps: true })

module.exports = mongoose.model("Events",EventsSchema)