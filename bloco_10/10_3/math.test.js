const math = require('./math');

describe('teste subtrair', () => {
  it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
    math.subtrair = jest.fn()

    math.subtrair();

    expect(math.subtrair).toHaveBeenCalled();
  })
})

describe('teste multiplicar', () => {
  it('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno', () => {
    math.multiplicar = jest.fn()
      .mockReturnValue(10)

    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
  })
})

describe('teste somar', () => {
  it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    const soma = jest.spyOn(math, "somar")
      .mockImplementation((a, b) => a + b);

    expect(soma(5, 5)).toBe(10);
    expect(soma).toHaveBeenCalled();
  })

  it('teste somar original', () => {
    expect(math.somar(5, 5)).toBe(10);
  })
})

describe('teste dividir', () => {
  it('Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
    const dividir = jest.spyOn(math, "dividir")
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)

    expect(dividir()).toBe(2);
    expect(dividir).toHaveBeenCalled();
    expect(dividir()).toBe(5);
    expect(dividir).toHaveBeenCalledTimes(2);
  })
})

describe('Testando o subtrair', () => {
  it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    const menos = jest.spyOn(math, "subtrair");
    menos.mockReturnValue(20);
    expect(menos()).toBe(20);
    math.subtrair.mockRestore();
    expect(math.subtrair(5, 5)).toBe(0);
  });
});
