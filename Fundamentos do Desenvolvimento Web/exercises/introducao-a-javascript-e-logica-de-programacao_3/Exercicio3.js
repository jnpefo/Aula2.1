// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;

for (let index = 0; index < n; index += 1) {
    let simb = "";
    for (let cont = 0; cont < n; cont += 1) {
        if (cont < n - index) {
            simb += " ";
        } else {
            simb += "*";
        }
    }
    console.log(simb);
}
