import React, { useState } from "react";
import useAxios from "./useAxios";
import PokemonCard from "./PokemonCard";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function PokeDex() {
  const [pokemon, addPokemon] = useAxios(BASE_URL);
  const [pokeName, setPokeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokeName.trim() !== "") {
      addPokemon(pokeName.toLowerCase()); // API requires lowercase names
      setPokeName("");
    }
  };

  return (
    <div>
      <h2>PokeDex</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button type="submit">Fetch Pokémon</button>
      </form>
      <div>
        {Array.isArray(pokemon) && pokemon.length > 0 ? (
          pokemon.map((p, index) => <PokemonCard key={index} pokemonData={p} />)
        ) : (
          <p>There are no Pokémon to display</p>
        )}
      </div>
    </div>
  );
}

export default PokeDex;