const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

const toObject = ([name, brand, year]) => ({ name, brand, year });


assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal .