const TestService = require('./test.service');

class TestController {
  constructor() {
    this.testService = new TestService();
  }

  testDatabaseConnection(req) {
    return this.testService.testDatabaseConnection();
  }

  testErrorResponse(req) {
    const error = new Error('TEST_ERROR');
    error.status = 400;

    throw error;
  }
}

module.exports = TestController;
