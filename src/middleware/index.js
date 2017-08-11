const thirdPartyMiddleware = require('./thirdParty.middleware');
const swaggerMiddleware = require('./swaggerMiddleware');

module.exports = (app) => {
  swaggerMiddleware(app);
  thirdPartyMiddleware.init(app);
};
