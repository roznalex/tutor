const test = require('./test.route');

module.exports = (app) => {
  test.apply(app);
};
