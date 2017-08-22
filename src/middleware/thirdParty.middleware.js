const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const winston = require('winston');
const passport = require('passport');

module.exports = {
  init: (app) => {
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true,
        }),
      ],
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true,
      colorize: false,
    }));
    app.use(passport.initialize());
  },
};
