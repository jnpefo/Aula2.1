const readline = require('readline-sync');

const opcao = ['imc', 'velocidade','sorteio', 'fatorial'];
const menu = `Qual script deseja executar? (${opcao.join(' / ')}), por digite: `;
const escolha = readline.question(menu);

require(`./${escolha}`);
