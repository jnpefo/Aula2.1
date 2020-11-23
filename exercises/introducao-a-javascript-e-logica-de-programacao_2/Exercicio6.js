// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0, comp = 0;


for (let n = 0; n < numbers.length; n += 1) {
    comp = numbers[n];
    if (comp % 2) {
        result += 1;
    }
}

if (result > 0) {
    console.log("Meus números impares: " + result);
} else {
    console.log("nenhum valor ímpar encontrado")
}
