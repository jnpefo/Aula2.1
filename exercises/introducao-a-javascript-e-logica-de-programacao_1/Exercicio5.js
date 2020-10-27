// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let a = 45; b = 45; c = 45; r = 0; v = undefined;

r = a + b + c;

if (r == 180) {
    v = true;
    console.log("Isso é um triângulo");
    console.log(v);
} else {
    v = false;
    console.log("Isso não é um triângulo", v);
    console.log(v);
}

