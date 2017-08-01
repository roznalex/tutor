const _ = require('lodash');
const path = require('path');

const COMPONENT_PATH = path.resolve('src/components');
const Loader = require('../engine/Loader');

const routesLoader = Loader.create({ componentPath: COMPONENT_PATH, filePattern: '*.route.js' });

module.exports = {
  initRoutes: (app) => {
    const routes = routesLoader.load();

    _.forEach(routes, (router) => {
      app.use(`/${router.folder}`, router.file);
    });
  },
};
