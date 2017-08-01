const Router = require('express').Router;

const testRouter = new Router();

testRouter.get('/', (req, res) => {
  res.end('This is test');
});

module.exports = testRouter;
