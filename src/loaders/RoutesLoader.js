const _ = require('lodash');

class RouteLoader {
  constructor(app, swaggerData, controllers) {
    this.app = app;
    this.swaggerData = swaggerData;
    this.controllers = _.map(controllers, ({ folder, file: ControllerClass }) => ({
      component: folder,
      instance: new ControllerClass(),
    }));
  }

  initRoutes() {
    const componentRoutes = {};

    _.forEach(this.swaggerData.paths, (methods, path) => {
      _.forEach(methods, (options, methodName) => {
        const component = path.split('/')[1];

        if (!_.isArray(componentRoutes[component])) {
          componentRoutes[component] = [];
        }

        componentRoutes[component].push({
          path,
          handler: options.operationId,
          method: methodName,
        });
      });
    });

    _.forEach(componentRoutes, this.loadRoute.bind(this));
  }

  loadRoute(componentRoutes, componentName) {
    _.forEach(componentRoutes, (routeOptions) => {
      const appMethod = this.app[routeOptions.method].bind(this.app);

      if (typeof appMethod !== 'function') {
        throw new Error('UNRECOGNIZED_HTTP_METHOD');
      }

      const routeHandler = this.getHandlerForRoute(componentName, routeOptions);

      appMethod(routeOptions.path, RouteLoader.getEndpointWrapper(routeHandler));
    });
  }

  getHandlerForRoute(componentName, routeOptions) {
    const handlerControllers = this.controllers
      .filter((controller) => {
        const controllerMatches = controller.component === componentName;
        const hasHandler = _.isFunction(controller.instance[routeOptions.handler]);

        return controllerMatches && hasHandler;
      })
      .map(({ instance }) => instance);

    if (_.size(handlerControllers) > 1) {
      throw new Error(`There have been found multiple controllers that can handle '${routeOptions.method}: ${routeOptions.path}' request. Handler function name: '${routeOptions.handler}'`);
    }

    if (!_.size(handlerControllers)) {
      throw new Error(`No handlers have been found for '${routeOptions.method}: ${routeOptions.path}' request. Handler function name: '${routeOptions.handler}'`);
    }

    const finalController = handlerControllers[0];

    return finalController[routeOptions.handler].bind(finalController);
  }

  static getEndpointWrapper(handler) {
    return async (req, res, next) => {
      try {
        const controllerResponse = await handler(req);

        res.json({
          data: controllerResponse,
        });
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = RouteLoader;
