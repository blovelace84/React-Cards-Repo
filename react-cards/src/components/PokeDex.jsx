// src/PokeDex.js
import React from "react";
import useAxios from "../hooks/useAxios";
import PokemonCard from "./PokemonCard";
import {formatPokemon} from "../helpers/formatters";
import './PokeDex.css';

function PokeDex() {
  const [pokemon, fetchPokemon, clearPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon/",
    formatPokemon
  );

  return (
    <div className="PokeDex">
      <h1>PokeDex</h1>
      <button onClick={() => fetchPokemon("?limit=10", true)}>Fetch All Pokémon</button>
      <button onClick={clearPokemon}>Clear All</button>

      <div>
        {pokemon.map(p => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <img src={p.front} alt={p.name} />
            <img src={p.back} alt={p.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokeDex;