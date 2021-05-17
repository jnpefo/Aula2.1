const readline = require('readline-sync');

const sorteio = () => {
  const aleatorio = Math.floor(Math.random() * (10 +1));
  const numero = readline.questionInt('Advinhe um número de 0 a 10: ');
  return numero == aleatorio ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${aleatorio}`;
};

let jogar = null;
do {
  console.log(sorteio());
  jogar = readline.question('Deseja jogar novamente? (y/n): ');
} while (jogar.toLocaleLowerCase() === 'y');
