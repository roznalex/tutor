const express = require('express');

const config = require('../config');
const logger = require('../tools/logger');
const initMiddleware = require('./middleware');

const { initRoutes } = require('./loaders');

const app = express();

initMiddleware(app);
initRoutes(app);

app.listen(config.get('port'), () => {
  logger.info(`Server started on the port: ${config.get('port')}`);
});
