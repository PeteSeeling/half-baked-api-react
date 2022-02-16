import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon-column'>
      {pokemon.map((poke, i) => <div className='pokemon-item' key={poke.pokemon + i}>
        <p>{poke.pokemon}</p>
        <img className="image" src={poke.url_image} />
      </div>)}
    </div>
  );
}