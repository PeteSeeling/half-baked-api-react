import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      { /* stretch goal: <WeatherSearch /> */ }
    </div>
  );
}

export default App;
