const path = require('path');
const glob = require('glob');

class Loader {
  constructor(componentPath, filePattern) {
    this.componentPath = componentPath;
    this.filePattern = filePattern;
  }

  load() {
    const files = glob.sync(`${this.componentPath}/*/${this.filePattern}`);

    return files
      .map(file => path.relative(this.componentPath, file))
      .map((filePath) => {
        const [folder] = filePath.split('/');
        const fileFullPath = `${this.componentPath}/${filePath}`;
        const fileRelativePath = path.relative(__dirname, fileFullPath);

        return {
          folder,
          file: require(fileRelativePath), // eslint-disable-line
        };
      });
  }

  static create(options) {
    const { componentPath, filePattern } = options;

    if (!componentPath) {
      throw new Error('ERR_COMPONENT_PATH_IS_REQUIRED');
    }

    if (!filePattern) {
      throw new Error('ERR_FILE_PATTERN_IS_REQUIRED');
    }

    return new Loader(componentPath, filePattern);
  }
}

module.exports = Loader;
