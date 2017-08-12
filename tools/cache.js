const Cache = require('../engine/Cache');
const logger = require('./logger');
const config = require('./config');

module.exports = Cache({
  logger,
  url: config.get('redis:url'),
});
