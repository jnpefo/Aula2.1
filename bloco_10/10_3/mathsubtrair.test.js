const math = require('./math');

describe('Testando o subtrair', () => {
  it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    const menos = jest.spyOn(math, "subtrair");
    menos.mockReturnValue(20);
    expect(menos()).toBe(20);
    math.subtrair.mockRestore();
    expect(math.subtrair(5, 5)).toBe(0);
  });
});
