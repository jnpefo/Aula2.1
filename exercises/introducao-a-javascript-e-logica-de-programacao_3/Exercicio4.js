// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5, meio = (n + 1) / 2, cEsquerdo = meio, cDireita = meio;

for (let linha = 0; linha < n; linha += 1) {
    let simb = " ";
    for (let col = 0; col <= linha; col += 1) {
        if (col <= cEsquerdo || col >= cDireita) {
            simb += " ";
        } else {
            simb += "*";
        }
    }
    cEsquerdo -= 1;
    cDireita += 1;
    console.log(simb);
}
