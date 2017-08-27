const logger = require('../../tools/logger');

module.exports = app => app.use((err, req, res) => {
  if (typeof err.status === 'number') {
    res.status(err.status);
  } else {
    res.status(500);
  }

  const errorJson = {
    error: {
      message: err.message,
    },
  };

  logger.error(err);
  res.json(errorJson);
});
