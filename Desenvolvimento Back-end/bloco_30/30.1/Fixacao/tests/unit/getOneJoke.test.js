const { stub } = require('sinon');
const { expect } = require('chai');

const { getOneJoke } = require('../../dipExample');

const requesterStub = stub();

describe('Testando a função "getOneJoke"', function () {
  it('"requester stub" é chamado uma vez', function () {
    getOneJoke(1, requesterStub);

    expect(requesterStub.calledOnce).to.be.equals(true);
  });
});
