import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      counter: 10
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter >= 13 && nextState.counter <= 15) return false;
    return true;
  }

  render() {
    console.log("render");
    console.log(this.state.counter);
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>

      </div>
    );
  }
}

export default Counter;
  

//   2 - Utilizando o código do componente Counter adicione, imediatamente após sua montagem, o valor 10 na chave counter do estado.
// 3 - Com o mesmo código do exercício anterior, impeça que a renderização seja feita, caso o valor na chave counter esteja entre 13 e 15.

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", this.state, nextState);
  //   return true;
  // }

  // componentDidUpdate(prevPros, prevState) {
  //   console.log("componentDidUpdate", this.state, prevState);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.value >= 13 && nextProps.value <= 15) return false;
  //   return true;
  // }
