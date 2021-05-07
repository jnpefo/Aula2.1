const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const result = names.reduce((soma, name) => {
    return soma + name.split('').reduce((somaSplit, caracter) => {
      if (caracter === 'a' || caracter === 'A') {
        return somaSplit + 1;
      }
      return somaSplit;
    }, 0);
  }, 0);
  console.log(result);
  return result;
}

assert.deepStrictEqual(containsA(), 20);
