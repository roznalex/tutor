const Router = require('express').Router;
const TestModel = require('./test.model');

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

  res.send(test);
  res.end('This is test');
});

module.exports = testRouter;
