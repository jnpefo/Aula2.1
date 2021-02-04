const getUserName = require('./2.js');

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

test('Teste ID encontrado', () => {
  return getUserName(4).then(name => {
    expect(name).toBe('Mark');
  });
});

test('Teste ID não encontrado', () => {
  return getUserName(6).catch(erro => {
    expect(erro).toEqual({ error: 'User with 6 not found.' });
  });
});