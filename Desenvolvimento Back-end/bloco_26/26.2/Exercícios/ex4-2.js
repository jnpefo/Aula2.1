// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const fs = require('fs').promises;

const simpsons = './simpsons.json';


const idPromise = async (id) => {
  const simpsons = await fs
    .readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
}

console.log(idPromise(1));
