import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div>
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
      {/* Componente / props / paramento */}
    </div>
  );
}

export default App;
