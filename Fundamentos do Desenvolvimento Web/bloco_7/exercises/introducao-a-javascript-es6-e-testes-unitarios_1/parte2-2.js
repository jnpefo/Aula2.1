const longestWord = (text) => {
  let textArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (let word of textArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// const longestWord = (texto) => console.log(texto.split(' ')[texto.split(' ').length - 1]);

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'
