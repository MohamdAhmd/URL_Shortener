const dotenv = require("dotenv");
dotenv.config();

const { LOG_FILE_PATH, DBURL, PORT } = process.env;

module.exports = {
  LOG_FILE_PATH: LOG_FILE_PATH,
  DBURL: DBURL,
  PORT: PORT,
};
