//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];


for (let n = 0; n < 25; n += 1) {
    numbers[n] = Math.ceil(Math.random() * 25);
    console.log(numbers[n]);
}

for (let n = 0; n < numbers.length; n += 1) {
    let result = 0;
    result = numbers[n] / 2;
    console.log("A Divisão por 2 do Array na possição " + (n += 1) + ": " + result);
}