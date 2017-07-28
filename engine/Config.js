const nconf = require('nconf');
const path = require('path');

class Config {
  /**
   * @param {Object} options
   * @param {String} options.env
   * @param {String} options.dir
   * @return {Object}
   */
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

    this.env = env.toLowerCase();
    this.get = nconf.get.bind(nconf);
    this.set = nconf.set.bind(nconf);
  }

  static create(options) {
    return new Config(options);
  }
}

module.exports = Config;
