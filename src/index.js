const express = require('express');

const config = require('../config');
const logger = require('../tools/logger');
const initMiddleware = require('./middleware');
const initRoutes = require('./routes');

const app = express();

initMiddleware(app);
initRoutes(app);

app.listen(config.get('port'), () => {
  logger.info(`Starting server on port: ${config.get('port')}`);
});
