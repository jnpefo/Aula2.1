function encode(palavra) {
  let nPalavra = '';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === 'a') {
      nPalavra += 1;
    } else if (palavra[i] === 'e') {
      nPalavra += 2;
    } else if (palavra[i] === 'i') {
      nPalavra += 3;
    } else if (palavra[i] === 'o') {
      nPalavra += 4;
    } else if (palavra[i] === 'u') {
      nPalavra += 5;
    } else {
      nPalavra += palavra[i];
    }
  }
  return nPalavra;
}

console.log(encode('automatizados'));

// function decode(palavra) {
//   let nPalavra = '';
//   for (let i = 0; i < palavra.length; i += 1) {
//     if (palavra[i] === '1') {
//       nPalavra += 'a';
//     } else if (palavra[i] === '2') {
//       nPalavra += 'e';
//     } else if (palavra[i] === '3') {
//       nPalavra += 'i';
//     } else if (palavra[i] === '4') {
//       nPalavra += 'o';
//     } else if (palavra[i] === '5') {
//       nPalavra += 'u';
//     } else {
//       nPalavra += palavra[i];
//     }
//   }
//   return nPalavra;
// }