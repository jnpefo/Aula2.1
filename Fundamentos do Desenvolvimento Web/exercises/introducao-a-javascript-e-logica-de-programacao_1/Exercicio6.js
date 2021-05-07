// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let pXadrez = ["peão", "torre", "cavalo", "bispo", "rainha", "rei"];

let peça = "Peão", pMinusculo, pEscolhida;

pMinusculo = peça.toLowerCase();

for (let index = 0; index < pXadrez.length; index++) {
    if(peça==pXadrez[index]){
        pEscolhida=pXadrez[index];
    }    
}

switch (pEscolhida) {
    case value:
        
        break;

    default:
        break;
}

pXadrez