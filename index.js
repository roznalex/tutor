const http = require('http');
const config = require('./config');

http.createServer((req, res) => res.end('Hello'))
  .listen(config.get('port'));
