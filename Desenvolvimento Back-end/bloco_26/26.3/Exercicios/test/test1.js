const { expect } = require("chai")

const fs = require('fs')

const ex1 = require('../ex1.js')

describe('testes para função ex1', () => {
  describe('numero maior que 0', () => {
    it('é uma string?', () => {
      const resposta = ex1(5)

      expect(resposta).to.be.a('string')
    })
  })
})
