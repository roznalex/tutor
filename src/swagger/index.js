const path = require('path');

const SWAGGER_FILE_PATH = path.resolve('./src/swagger/swagger.yaml');

const SwaggerMiddlewareLoader = require('./SwaggerLoader');

const swaggerMiddlewareLoader = new SwaggerMiddlewareLoader(SWAGGER_FILE_PATH);

module.exports = swaggerMiddlewareLoader.load();
