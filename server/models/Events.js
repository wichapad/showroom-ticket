const mongoose = require("mongoose");

const EventsSchema = mongoose.Schema(
  {
    band: {
      artist: { type: String },
      description: { type: String },
      genre: { type: String },
    },
    images: {
      band_image: { type: String },
      poster_image: { type: String },
    },

    dates: [
      {
        localDate: { type: Date },
        localTime: { type: String },
      },
    ],

    locations: [
      {
        name_show: { type: String },
        venue: { type: String },
        state: { type: String },
        city: { type: String },
      },
    ],

    ticket: [
      {
        ticket_type: { type: String },
        ticket_price: { type: Number },
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
