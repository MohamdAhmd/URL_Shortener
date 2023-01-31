const winston = require("winston");
const config = require("../config");

// date + logger level + message

const dateFormat = () => {
  return new Date(Date.now()).toLocaleString();
};

class loggerService {
  constructor(route) {
    // route == path
    this.route = route;
    const logger = winston.createLogger({
      level: "info",
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${
          info.message
        }`;
        message = info.obj
          ? message + `data${JSON.stringify(info.obj)}`
          : message;
        return message;
      }),
      transports: [
        //write where i choose to write twice,
        new winston.transports.Console(), // one in console
        new winston.transports.File({
          // and one in log/shortUrlController.log
          filename: `${config.LOG_FILE_PATH}/${route}.log`,
        }),
      ],
    });
    this.logger = logger;
  }
  async info(message) {
    this.logger.log(`info`, message);
  }

  async info(message, obj) {
    this.logger.log(`info`, message, { obj });
  }
  //----------------------------------------------------------------
  async error(message) {
    this.logger.log(`error`, message);
  }

  async error(message, obj) {
    this.logger.log(`error`, message, { obj });
  }
  //-------------------------------------------------------------------
  async debug(message) {
    this.logger.log(`debug`, message);
  }

  async debug(message, obj) {
    this.logger.log(`debug`, message, { obj });
  }
}

module.exports = loggerService;
