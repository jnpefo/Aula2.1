// Teste se encode e decode são funções;
const { encode, decode } = require('../src/2.js');

describe('Teste para as funções encode e decode', () => {
  test('Testa se o encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  test('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente, na função encode', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });

  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
    expect(decode('67890')).toBe('67890');
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('string')).toHaveLength(6);
    expect(decode('123456')).toHaveLength(6);
  });
});
