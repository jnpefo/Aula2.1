// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0, div = 0;

for (let n = 0; n < numbers.length; n += 1) {
    result = result + numbers[n];
}

div = 1 + numbers.length;

result = result / div;

console.log("A média é: " + result);