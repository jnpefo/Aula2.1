import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    }
  }

  handleClick(e) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(e.target.style.backgroundColor);
  }

  handleClick1(e) {
    this.setState((estadoAnterior1, _props) => ({
      numeroDeCliques1: estadoAnterior1.numeroDeCliques1 + 1
    }), () => {
      console.log(e.target.style.backgroundColor)
    })
  }

  handleClick2(e) {
    this.setState((estadoAnterior2, _props) => ({
      numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1
    }))
    console.log(e.target.style.backgroundColor)
  }
  render() {
    const { numeroDeCliques, numeroDeCliques1, numeroDeCliques2 } = this.state
    return (
      <div>
        <button onClick={this.handleClick} style={numeroDeCliques % 2 === 0 ? {backgroundColor: "green"} : {backgroundColor: "rgb(239, 239, 239)"}}>{numeroDeCliques}</button>

        <button onClick={this.handleClick1} style={numeroDeCliques1 % 2 === 0 ? {backgroundColor: "green"} : {backgroundColor: "blue"}}>{numeroDeCliques1}</button>

        <button onClick={this.handleClick2} style={numeroDeCliques2 % 2 === 0 ? {backgroundColor: "green"} : {backgroundColor: "blue"}}>{numeroDeCliques2}</button>
      </div>
      )
  }
}

export default App;

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão foi clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
// 8 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// 9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!
