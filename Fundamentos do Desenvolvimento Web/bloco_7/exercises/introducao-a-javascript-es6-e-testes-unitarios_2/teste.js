const pessoa = {
  nome: 'Paulo',
  sobrenome: 'Henrique',
  idade: 24
}

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

console.log(procura(pessoa, 'nome', 'Paulo'));