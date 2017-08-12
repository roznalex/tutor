const Router = require('express').Router;
const TestModel = require('./test.model');
const cache = require('../../../tools/cache');

const testRouter = new Router();

testRouter.get('/', async (req, res) => {
  let test = await TestModel.findOne({ message: 'lol' });

  try {
    if (!test) {
      test = await TestModel.create({ message: 'lol' });
    }
  } catch (err) {
    throw err;
  }

  cache.set('foo', 'bar');
  cache
    .get('foo')
    .then(val => res.end(`From cache ${val}`));

  // res.send(JSON.stringify(test));
});

module.exports = testRouter;
