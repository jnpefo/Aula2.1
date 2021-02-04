function App() {
  const tarefas = ['acordar', 'trabalhar', 'comer', 'voltarCasa', 'dormir'];
  const task = value => {
    return <li>{value}</li>;
  };
  return tarefas.map(task);
}

export default App;
