const express = require('express');

const { config, logger } = require('../tools');
const initMiddleware = require('./middleware');
const dbConnect = require('./dbConnect');
const loadStrategies = require('./passport');

const { initRoutes, initModels } = require('./loaders');

const app = express();

dbConnect(config.get('mongodb'));
initMiddleware(app);
loadStrategies(config);
initRoutes(app);
initModels();

app.listen(config.get('port'), () => {
  logger.info(`Server started on the port: ${config.get('port')}`);
});
