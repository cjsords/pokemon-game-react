import './App.css';
import {getPokemon} from './api/getPokemon'
import {getMoves} from './logic/getMoves'
import { PokemonCard } from './components/pokemonCard';

function App() {
  return (
    <div className="App">
      <button onClick={getPokemon}>
        Moves
      </button>
      <PokemonCard/>
    </div>
  );
}


export default App;
