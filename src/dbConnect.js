const mongoose = require('mongoose');
const bluebird = require('bluebird');

const { logger } = require('../tools');

module.exports = async (dbConfig) => {
  if (!dbConfig) {
    throw new Error('Db config is empty');
  }

  const { url } = dbConfig;

  mongoose.Promise = bluebird;

  try {
    await mongoose.connect(url);
    logger.info(`Db successfully connected: ${url}`);
  } catch (err) {
    logger.error(`Db connection error: ${err}`);
  }

  return Promise.resolve(mongoose.connection);
};
