// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const aleatorio = require('./1')

test('testando a função aleatório', () => {
  aleatorio = jest.fn().mockReturnValue(10);

  expect(aleatorio()).toBe(10);
})