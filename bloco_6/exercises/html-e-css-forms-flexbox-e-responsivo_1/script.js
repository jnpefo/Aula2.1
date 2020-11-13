window.onload = function () {
  const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const mCv = document.querySelector("#montarcv");
  const estados = document.querySelector("#estado");

  for (let est of uf) {
    let opt = document.createElement("option");
    opt.value = est;
    opt.innerHTML = est;
    estados.appendChild(opt);
  };

  mCv.addEventListener("click", function (event) {
    event.preventDefault();
    montaCV();
  });

  function montaCV() {
    let dados = selecionaTudo();

    let divResumo = document.querySelector("#resumo");
    divResumo.innerHTML = "";

    for (let valor of dados) {
      let p = document.createElement("p");
      p.innerHTML += valor.value;
      divResumo.appendChild(p);
    };
  }

  function selecionaTudo() {
    let dados = [];

    let nome = document.querySelector("#nome");
    let email = document.querySelector("#mail");
    let cpf = document.querySelector("#cpf");
    let endereco = document.querySelector("#endereco");
    let cidade = document.querySelector("#cidade");
    let estados = document.querySelector("#estado");
    let casa = document.querySelector("#casa");
    let apartamento = document.querySelector("#apartamento");
    let moradia;

    // if(casa === on){
    //   moradia = casa;
    // } else{
    //   moradia = apartamento;
    // }  

    let resumo = document.querySelector("#resumo");
    let cargo = document.querySelector("#cargo");
    let descricao = document.querySelector("#descricao");
    let data = document.querySelector('input[type="date"]');

    dados.push(nome, email, cpf, endereco, cidade, estados, resumo, cargo, descricao, data);

    return dados;
  }
}