const path = require('path');

const Loader = require('../../engine/Loader');
const RouteLoader = require('./RoutesLoader');
const swaggerData = require('../swagger/index');

const COMPONENT_PATH = path.resolve('src/components');

const modelsLoader = Loader.create({ componentPath: COMPONENT_PATH, filePattern: '*.model.js' });
const controllerLoader = Loader.create({ componentPath: COMPONENT_PATH, filePattern: '*.controller.js' });

module.exports = {
  initRoutes(app) {
    const controllers = controllerLoader.load();

    const routesLoader = new RouteLoader(app, swaggerData, controllers);

    routesLoader.initRoutes();
  },

  initModels() {
    modelsLoader.load();
  },
};
