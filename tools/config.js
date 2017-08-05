const path = require('path');
const Config = require('../engine/Config');

module.exports = Config.create({
  dir: path.join(process.cwd(), 'config'),
  env: process.env.NODE_ENV,
});
