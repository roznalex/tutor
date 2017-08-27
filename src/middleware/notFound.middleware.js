const HTTPErrors = require('http-errors');

module.exports = app => app.use(() => {
  throw new HTTPErrors.NotFound('Not found');
});
