let a = {
    nome: "jean",
    text: "nome",
    b: {
        arry: ["a", "b", "c"], //analisar
        nome: "jean",
        text: "nome",
    }
};

a.b.arry.push("d");

console.log(a.b.arry);
