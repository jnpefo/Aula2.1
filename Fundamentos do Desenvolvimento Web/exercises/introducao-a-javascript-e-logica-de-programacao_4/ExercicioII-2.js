// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let teste = [2, 3, 6, 7, 10, 1], comp = 0, maior = 0, i = 0;

function indice(teste) {
    for (let index = 0; index <= teste.length - 1; index += 1) {
        comp = teste[index];
        if (maior < comp) {
            maior = comp;
            i = index;
        }
    }
    return i;
}
console.log(indice(teste));