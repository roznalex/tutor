const config = require('../config');
const Logger = require('../engine/Logger');

module.exports = Logger.create(config.get('logger'));
