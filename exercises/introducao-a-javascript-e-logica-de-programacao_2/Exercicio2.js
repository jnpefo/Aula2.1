// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let n = 0; n < numbers.length; n += 1) {
    result = result + numbers[n];
}

console.log("A soma de todo o array é: " + result);