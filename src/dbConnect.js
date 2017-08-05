const mongoose = require('mongoose');

const { logger } = require('../tools');

module.exports = async (dbConfig) => {
  const dbConnection = mongoose.connection;
  const { protocol, name, url, port } = dbConfig;
  const dbAddress = `${protocol}://${url}/${name}:${port}`;

  mongoose.Promise = global.Promise;

  try {
    await mongoose.connect(dbAddress);
    logger.info(`Db successfully connected: ${dbAddress}`);
  } catch (err) {
    logger.error(`Db connection error: ${err}`);
  }

  return Promise.resolve(dbConnection);
};
