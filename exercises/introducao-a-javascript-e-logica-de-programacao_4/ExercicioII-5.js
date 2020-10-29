// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2


let teste = [2, 3, 2, 3, 3, 2, 3], comp = 0;
let obj = {

};

for (let index = 0; index < teste.length; index += 1) {
    if (obj[teste[index]] == undefined) {
        obj[teste[index]] = 1;
    } else {
        obj[teste[index]] += 1;
    }
}
for (let cont = 0; cont < obj.length; cont += 1){
    if(obj[cont){
        
    }
    
}


console.log(obj);