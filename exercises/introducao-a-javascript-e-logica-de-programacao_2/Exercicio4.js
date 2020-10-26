// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0, div = 0;

for (let n = 0; n < numbers.length; n += 1) {
    result = result + numbers[n];
}

div = 1 + numbers.length;

result = result / div;

console.log("A média é: " + result);

if (result > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}