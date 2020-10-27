//Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let n = 0; n < 25; n += 1) {
    numbers[n] = Math.ceil(Math.random() * 25);
    console.log(numbers[n])
}
