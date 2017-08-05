const express = require('express');

const { config, logger } = require('../tools');
const initMiddleware = require('./middleware');
const dbConnect = require('./dbConnect');

const { initRoutes, initModels } = require('./loaders');

const app = express();

dbConnect(config.get('db'));
initMiddleware(app);
initRoutes(app);
initModels();

app.listen(config.get('port'), () => {
  logger.info(`Server started on the port: ${config.get('port')}`);
});
