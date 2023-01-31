const mongoose = require("mongoose");
const shortId = require("shortid");
const config = require("../config");
const dbUrl = mongoose.connect(config.DBURL);

const shortUrlShems = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrlModel", shortUrlShems);
