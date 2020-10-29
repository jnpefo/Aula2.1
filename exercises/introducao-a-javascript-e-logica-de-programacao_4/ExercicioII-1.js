// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

let palvara = "arara", comp = "";

function palindromo(exemplo) {
    for (let index = exemplo.length - 1; index >= 0; index -= 1) {
        comp += exemplo[index];
    }
    if (comp == exemplo) {
        v = true;
        console.log("A palvara, " + exemplo + " é um palindormo - " + v);
    } else {
        v = false;
        console.log("A palvara, " + exemplo + " não é um palíndromo - " + v);
    }
}
palindromo(palvara);

