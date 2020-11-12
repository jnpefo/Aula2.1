window.onload = function () {
  const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  const estados = document.querySelector("#estado");
  for (let est of uf) {
    let opt = document.createElement("option");
    opt.value = est;
    opt.innerHTML = est;
    estados.appendChild(opt);
  };
  // return 
}