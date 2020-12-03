const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

//Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  // const newArray = arrays.reduce((result, arrays) => result.concat(arrays), []);
  const newArray = arrays.reduce((acc, valores) => {
    return acc.concat(valores);
  }, []);
  console.log(newArray);
  return newArray;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
