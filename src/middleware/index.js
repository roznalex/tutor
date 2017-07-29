const thirdPartyMiddleware = require('./thirdParty.middleware');

module.exports = (app) => {
  thirdPartyMiddleware.init(app);
};
