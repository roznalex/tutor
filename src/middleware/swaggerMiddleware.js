const swaggerUi = require('swagger-ui-express');
const swaggerMiddleware = require('swagger-express-middleware');
const swaggerFile = require('../swagger');

module.exports = (app) => {
  swaggerMiddleware(swaggerFile, app, (err, middleware) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(
      middleware.metadata(),
      middleware.CORS(),
      middleware.parseRequest(),
      middleware.validateRequest());
  });
};
