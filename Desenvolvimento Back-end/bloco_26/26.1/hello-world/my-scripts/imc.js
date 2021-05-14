const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual seu peso? ');
const ALTURA = readline.questionFloat('Qual sua altura? ');

const IMC = (peso, altura) => {
  let result = (peso / (altura*altura));
  return (result*10000).toFixed(2);
}; 

const situacao = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Acima do peso (sobrepeso)';
  if (imc < 35) return 'Obesidade grau I ';
  if (imc < 40) return 'Obesidade grau II ';
  return 'Obesidade graus III e IV';
};

console.log(`Certo seu peso: ${PESO},
Sua altura: ${ALTURA}.
Seu IMC: ${IMC(PESO, ALTURA)}.
Vamos ver sua situação eh:
Hum......`);
console.log(situacao(IMC(PESO, ALTURA)));
