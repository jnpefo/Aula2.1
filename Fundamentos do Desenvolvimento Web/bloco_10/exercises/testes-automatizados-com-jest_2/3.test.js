// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

const getUserName = require('./2.js');

test('Teste ID encontrado com async', async () => {
  expect(await getUserName(4)).toBe('Mark');
});

test('Teste ID não encontrado com async', async () => {
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  }
});

