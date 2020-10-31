// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2


let teste = [9, 1, 2, 3, 9, 5, 7], maior = 0;
let key;
let obj = {

};

for (let index = 0; index < teste.length; index += 1) {
    if (obj[teste[index]] == undefined) {
        obj[teste[index]] = 1;
    } else {
        obj[teste[index]] += 1;
    }
}

for (let chave in obj) {
    
    if (obj[chave] > maior) {
        key = chave;
        maior = obj[chave];
    }
}


console.log(key)
console.log(obj);