const readline = require('readline-sync');

const numero = readline.questionInt('Vamos fatora, me diga um número: ');

const fatorar = (nr) => {
  if (nr > 1) {
    let partes = [];
    while (nr > 1) {
        for (let i = 2; i <= nr; i++) {
            if (nr % i) continue;
            partes.push([nr, i]);
            nr = nr / i;
            break;
        }
    }
    partes.push([1, '']);
    return partes;
  } else {
    return console.log("Digite um número maior que 1, por favor");
  }

}

console.log(fatorar(numero));
// https://pt.stackoverflow.com/questions/31045/fatora%C3%A7%C3%A3o-em-javascript
