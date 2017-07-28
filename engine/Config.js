const nconf = require('nconf');
const path = require('path');

class Config {
  constructor(options = {}) {
    const { env, dir } = options;

    if (!env) {
      throw new Error('The environment is not specified');
    }

    if (!dir) {
      throw new Error('The config directory is not specified');
    }

    nconf
      .argv()
      .env({
        separator: '__',
        lowerCase: true,
      })
      .file({
        file: path.join(dir, `${env}.json`),
      });
  }
}

module.exports = Config;
