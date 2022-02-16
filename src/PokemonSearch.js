import { useState } from 'react';
import PokemonList from './pokemonList';
import { Spinner } from './Spinner';




export default function PokemonSearch() {
  
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('pikachu');
  const [pokemon, setPokemon] = useState([]);
 
 
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
    
    setLoading(true);
    
    const response = await fetch(`/.netlify/functions/pokemon?search=${search}`);
    const json = await response.json();
    setPokemon(json);
    setLoading(false);



        // set the loading state to true
  
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL

        // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a city
        <input onChange={(e => setSearch(e.target.value))} />
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <button>Get pokemon</button>
      </form>
      
      {
        loading
          ? <Spinner />
          : <PokemonList pokemon={pokemon} />
       
      }
    
      
  
    </section>
  );

}
