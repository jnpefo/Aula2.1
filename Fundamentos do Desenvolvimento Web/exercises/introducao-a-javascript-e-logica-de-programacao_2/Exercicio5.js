// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0, comp = 0;

for (let n = 0; n < numbers.length; n += 1) {
    comp = numbers[n];
    if (result < comp) {
        result = comp;
    }
}

console.log("O maior resultado da minha array é: " + result);