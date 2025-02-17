// src/PokeDex.js
import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import PokemonCard from "./PokemonCard";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function PokeDex() {
  const [pokemon, addPokemon] = useAxios(BASE_URL);
  const [query, setQuery] = useState("");

  const handleAddPokemon = () => {
    if (query.trim()) {
      addPokemon(query.toLowerCase()); // Fetch Pokémon by name
      setQuery(""); // Clear input after adding
    }
  };

  return (
    <div className="PokeDex">
      <h3>Search for a Pokémon</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleAddPokemon}>Add Pokémon</button>
      <div className="PokeDex-list">
        {pokemon.map((p, index) => (
          <PokemonCard
            key={index}
            name={p.name}
            imageFront={p.sprites.front_default}
            imageBack={p.sprites.back_default}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
