const http = require('http');

const config = require('../config');
const logger = require('../tools/logger');

http.createServer((req, res) => {
  res.end('Hello');
})
  .listen(config.get('port'));

logger.info(`Server is running on port: ${config.get('port')}`);
