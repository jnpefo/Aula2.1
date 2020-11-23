// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.


let a = 7, b = 6;

function maiorDosDois(a, b) {
    if (a < b) {
        return b;
    } else {
        return ("O maior dois dois números é: ", a);
    }
}

console.log("O maior dois dois números é: ", maiorDosDois(a, b));
