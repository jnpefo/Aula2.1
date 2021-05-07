const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const turnoManha = (objeto, chave, valor) => {
//   objeto[chave] = valor;
//   console.log(objeto);
// }

// turnoManha(lesson2, 'turno', 'manhã');

// const listarKey = (objeto) => {
//   for (key in objeto) {
//   console.log(key);
//   }
// }

// listarKey(lesson1);
// listarKey(lesson2);
// listarKey(lesson3);

// const tamanho = (objeto) => Object.keys(objeto).length;

// console.log(tamanho(lesson1));
// console.log(tamanho(lesson2));
// console.log(tamanho(lesson3));

// const valor = (objeto) => Object.values(objeto);

// console.log(valor(lesson1));
// console.log(valor(lesson2));
// console.log(valor(lesson3));

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// const totalAlunos = (objeto) => {
//   const totalAlunos1 = objeto.lesson1.numeroEstudantes;
//   const totalAlunos2 = objeto.lesson2.numeroEstudantes;
//   const totalAlunos3 = objeto.lesson3.numeroEstudantes;
//   let allAlunos = totalAlunos1 + totalAlunos2 + totalAlunos3;
//   return allAlunos;
// }
// console.log(totalAlunos(allLessons));

// const valorChave = (objeto, ordem) => Object.values(objeto)[ordem];

// console.log(valorChave(lesson1, 0));

// const procura = (objeto, chave, valor)


const procura = (objeto, chave, valor) => {
  const key = Object.keys(objeto);
  const values = Object.values(objeto);
  let rKey = false;
  let rValue = false;

  for (let i in key) {
    if (key[i] === chave) {
      rKey = true;
    }
  }
  for (let i in values) {
    if (values[i] === valor) {
      rValue = true;
    }
  }

  if (rKey && rValue) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(procura(lesson3, 'turno', 'noite'));

// Output: true,