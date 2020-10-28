// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5, m = (n + 1) / 2, simb = " ";

for (let index = 0; index < n; index += 1) {
    if (index < m) {
        simb += " ";
    } else {
        simb += "*";
    }
    console.log(simb);
}

