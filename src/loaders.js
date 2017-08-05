const _ = require('lodash');
const path = require('path');

const Loader = require('../engine/Loader');

const COMPONENT_PATH = path.resolve('src/components');

const routesLoader = Loader.create({ componentPath: COMPONENT_PATH, filePattern: '*.route.js' });
const modelsLoader = Loader.create({ componentPath: COMPONENT_PATH, filePattern: '*.model.js' });

module.exports = {
  initRoutes: (app) => {
    const routes = routesLoader.load();

    _.forEach(routes, (router) => {
      app.use(`/${router.folder}`, router.file);
    });
  },

  initModels: () => modelsLoader.load(),
};
