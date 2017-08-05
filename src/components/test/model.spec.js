const { expect } = require('chai');

describe('TestModel', () => {
  it('should exist', () => {
    const testModel = require('./model.spec'); // eslint-disable-line global-require

    expect(testModel).to.not.be.undefined;
  });
});
