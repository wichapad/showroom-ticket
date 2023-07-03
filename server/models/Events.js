const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema(
  {
    band: {
      artist: { type: String, required: true },
      description: { type: String, required: true },
      genre: { type: String, required: true },
    },
    images: {
      band_image: { type: String, required: true },
      poster_image: { type: String, required: true },
    },

    dates: [
      {
        localDate: { type: Date, required: true },
        localTime: { type: String, required: true },
      },
    ],

    locations: [
      {
        name_show: { type: String, required: true },
        venue: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
      },
    ],

    ticket: [
      {
        ticket_type: { type: String, required: true },
        ticket_price: { type: Number, required: true },
      },
    ],
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", EventsSchema);
module.exports = Events;
