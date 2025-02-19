import React from "react";
import useFlip from "./hooks";

function PokemonCard({ pokemonData }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div 
      onClick={toggleFlip} 
      style={{ 
        cursor: "pointer", 
        textAlign: "center", 
        border: "1px solid black", 
        padding: "10px", 
        margin: "10px", 
        display: "inline-block" 
      }}
    >
      {pokemonData.sprites ? (
        <>
          <h3>{pokemonData.name}</h3>
          <img
            src={isFlipped ? pokemonData.sprites.back_default : pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
        </>
      ) : (
        <p>Pokémon data not available</p>
      )}
    </div>
  );
}

export default PokemonCard;
