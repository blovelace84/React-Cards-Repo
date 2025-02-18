// src/PokeDex.js
import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import PokemonCard from "./PokemonCard";
import './PokeDex.css';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDex = () => {
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL);
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
        className="PokeDex-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleAddPokemon}>Add Pokémon</button>
      <button onClick={clearPokemon}>Clear all Pokémon</button>
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
