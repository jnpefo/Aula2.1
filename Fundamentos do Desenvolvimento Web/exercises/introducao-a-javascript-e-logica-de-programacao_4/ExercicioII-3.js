// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let teste = [2, 4, 6, 7, 10, 0, -3], comp = 0, menor = 0, i = 0;

function indice(teste) {
    for (let index = 0; index <= teste.length - 1; index += 1) {
        comp = teste[index];
        if (comp < menor) {
            menor = comp;
            i = index;
        }
    }
    return i;
}
console.log(indice(teste));