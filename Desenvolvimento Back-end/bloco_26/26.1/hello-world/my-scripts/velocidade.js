const readline = require('readline-sync');

const velocidade = (distância, tempo) => {
  return distância / tempo;
}

const DISTANCIA = readline.questionInt('Qual a distância em metros? ');
const TEMPO = readline.questionInt('Qual o tempo em segundos? ');

console.log(`A velocidade é ${velocidade(DISTANCIA, TEMPO)} m/s`);

// module.exports = velocidade;
