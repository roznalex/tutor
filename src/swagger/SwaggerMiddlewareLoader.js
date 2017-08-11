const jsYaml = require('js-yaml');
const fs = require('fs');

class SwaggerMiddlewareLoader {
  constructor(swaggerFilePath) {
    this.swaggerFilePath = swaggerFilePath;
  }

  load() {
    const fileData = fs.readFileSync(this.swaggerFilePath, 'utf-8');

    return jsYaml.safeLoad(fileData);
  }
}

module.exports = SwaggerMiddlewareLoader;
