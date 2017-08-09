const mongoose = require('mongoose');

const { logger } = require('../tools');

module.exports = async (dbConfig) => {
  const { url } = dbConfig;

  mongoose.Promise = global.Promise;

  try {
    await mongoose.connect(url);
    logger.info(`Db successfully connected: ${url}`);
  } catch (err) {
    logger.error(`Db connection error: ${err}`);
  }

  return Promise.resolve(mongoose.connection);
};
