const winston = require('winston');

class Logger {
  /**
   * @param {Object} options
   * @param {String} options.level
   * @param {Boolean} options.console
   */
  constructor(options = {}) {
    const { level = 'verbose', console } = options;

    this.logger = new winston.Logger({ level });

    if (console) {
      this.logger.add(winston.transports.Console, {
        colorize: true,
        prettyPrint: true,
      });
    }
  }

  static create(options) {
    return (new Logger(options)).logger;
  }
}

module.exports = Logger;
