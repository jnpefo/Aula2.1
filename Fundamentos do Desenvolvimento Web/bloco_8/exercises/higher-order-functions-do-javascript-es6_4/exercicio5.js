const assert = require('assert')

const myList = [1, 2, 3];

// const swap = (array) => {
//   const  = array;
//   return [c, b, a];
// };

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);

console.log(swappedList);

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)


// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .