// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 5, meio = (n + 1) / 2, cEsquerdo = meio, cDireita = meio;

for (let linha = 0; linha < n; linha += 1) {
    let simb = " ";
    for (let col = 0; col <= linha; col += 1) {
        if (col <= cEsquerdo || col >= cDireita || linha == meio) {
            simb += " ";
        }else{
            simb += "*";
        }
    }
    cEsquerdo -= 1;
    cDireita += 1;
    console.log(simb);
}
