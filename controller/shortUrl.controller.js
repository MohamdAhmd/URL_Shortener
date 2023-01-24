const shortUrlModel = require("../models/shortUrl.model");
const Logger = require("../services/logger.service");

const logger = new Logger("shortUrlController");

exports.getHome = async (req, res, next) => {
  const shortUrl = await shortUrlModel.find();
  res.render("home", { finalStateOfShorturl: shortUrl });
};

exports.postShorter = async (req, res, next) => {
  await shortUrlModel.create({ full: req.body.fullUrl });
  logger.info("post ShortUrl", { full: req.body.fullUrl });
  res.redirect("/");
};

exports.getShortUrl = async (req, res, next) => {
  const shortUrl = await shortUrlModel.findOne({ short: req.params.shorturl });
  if (shortUrl == null) {
    return res.sendStatus(404);
  } else {
    const { _id, __v, ...otherDetails } = shortUrl._doc;

    logger.info("Get | Redirect to ShortUrl", { otherDetails });
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
  }
};
