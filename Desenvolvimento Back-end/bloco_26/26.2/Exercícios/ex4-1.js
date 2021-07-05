const fs = require('fs/promises');

const simpsons = 'simpsons.json1';

fs.readFile(simpsons, 'utf8')
  .then((data) => {
    return console.log(JSON.parse(data));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${simpsons}\n Erro: ${err}`);
    // process.exit(1);
  });
