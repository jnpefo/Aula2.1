window.onload = function () {
  const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  const mCv = document.querySelector("#montarcv");
  const estados = document.querySelector("#estado");
  const reset = document.querySelector("#reset");
  const resum = document.querySelector(".resumoCv");

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

  reset.addEventListener('click', function () {
    resum.innerHTML = " ";
  })


  function montaCV() {
    let dados = selecionaTudo();

    let divResumo = document.querySelector("#resumoCv");
    divResumo.innerHTML = "";

    for (let valor of dados) {
      let p = document.createElement("p");
      p.innerHTML = valor.value;
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
    let radio = document.querySelector('input[name="moradia"]:checked');
    let moradia;

    if (radio != null) {
      moradia = radio.value;
    }

    let resumo = document.querySelector("#resumo");
    let cargo = document.querySelector("#cargo");
    let descricao = document.querySelector("#descricao");
    let data = document.querySelector('input[type="date"]');

    dados.push(nome, email, cpf, endereco, cidade, estados, moradia, resumo, cargo, descricao, data);

    return dados;
  }
}

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

// let date = document.getElementById('myInputId').DatePickerX.init();


