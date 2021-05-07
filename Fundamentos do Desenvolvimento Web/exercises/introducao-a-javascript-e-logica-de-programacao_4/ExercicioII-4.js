// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.


let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'], comp = "", maior = "";

function maiorArray(teste) {
    for (let index = teste.length - 1; index >= 0; index -= 1) {
        comp = teste[index];
        if (maior.length < comp.length) {
            maior = comp;
        }
    }
    return maior;
}

console.log(maiorArray(teste));