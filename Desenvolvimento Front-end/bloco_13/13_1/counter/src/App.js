import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;


// import React from "react";
// import CounterDisplay from "./CounterDisplay";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         Contador
//         <button
//           onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
//           Soma
//         </button>
//         <CounterDisplay value={this.state.counter} />
//       </div>
//     );
//   }
// }

// export default App;