import React from 'react';
import useTimer from './useTimer.js';

const App = () => {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      {timer}
      <br />
      {randomNumber} 
      <br />
      {isMultiple ? 'Acerto' : ''}
    </div>
  );
}

export default App;
