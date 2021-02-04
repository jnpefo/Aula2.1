const uppercase = require('./1.js');

test(`Teste para verificar se às letras de uma palavra fica em maiúsculas`, () => {
  return uppercase('palavra', (str) => {
    expect(str).toBe('PALAVRA');
  });
});
