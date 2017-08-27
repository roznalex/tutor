const express = require('express');

const { config, logger } = require('../tools');
const dbConnect = require('./dbConnect');
const loadStrategies = require('./passport');

const thirdPartyMiddleware = require('./middleware/thirdParty.middleware');
const swaggerMiddleware = require('./middleware/swaggerMiddleware');
const errorMiddleware = require('./middleware/error.middleware');
const notFoundMiddleware = require('./middleware/notFound.middleware');

const { initRoutes, initModels } = require('./loaders');

const app = express();

swaggerMiddleware(app);
thirdPartyMiddleware(app);

loadStrategies(config);
initRoutes(app);
initModels();
dbConnect(config.get('mongodb'));

notFoundMiddleware(app);
errorMiddleware(app);

app.listen(config.get('port'), () => {
  logger.info(`Server started on the port: ${config.get('port')}`);
});
