const path = require('path');
const swaggerUi = require('swagger-ui-express');

const swaggerMiddleware = require('swagger-express-middleware');
const SwaggerMiddlewareLoader = require('../swagger/SwaggerMiddlewareLoader');

const SWAGGER_FILE_PATH = path.resolve('./src/swagger/swagger.yaml');

module.exports = function (app) {
  const swaggerMiddlewareLoader = new SwaggerMiddlewareLoader(SWAGGER_FILE_PATH);
  const swaggerFile = swaggerMiddlewareLoader.load();

  swaggerMiddleware(swaggerFile, app, (err, middleware) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(
      middleware.metadata(),
      middleware.CORS(),
      middleware.parseRequest(),
      middleware.validateRequest());
  });
};
