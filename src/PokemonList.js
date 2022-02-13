import React from 'react'
import './PokemonList.css';

export default function PokemonList({pokemon}) {
  return (
    <div>
        {pokemon.map(pokemon => (
            <div key={pokemon} className='pokeDiv'>{pokemon.toUpperCase()}</div>
        ))}
    </div>
  )
}
