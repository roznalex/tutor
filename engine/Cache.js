const Redis = require('ioredis');

module.exports = ({ url, logger }) => {
  const redis = new Redis(url);

  redis.on('error', err => logger.error(`Redis connection error: ${err}`));
  redis.on('connect', () => logger.info(`Redis started on address: ${url}`));

  return redis;
};
