const TestModel = require('./test.model');

class TestService {
  async testDatabaseConnection() {
    const existingTest = await TestModel.findOne({ message: 'lol' });

    if (existingTest) {
      return existingTest;
    }

    const createdTest = await TestModel.create({ message: 'lol '});

    return createdTest;
  }
}

module.exports = TestService;
