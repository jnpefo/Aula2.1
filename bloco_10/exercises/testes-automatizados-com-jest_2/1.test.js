const uppercase = require('./1.test.js');

test(`Teste para verificar se às letras de uma palavra fica em maiúsculas`, (done) => {
  uppercase('palavra', (str) => {
    expect(str).toBe('PALAVRA');
    done();
  });
});