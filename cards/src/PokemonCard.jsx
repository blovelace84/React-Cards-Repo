import React from "react";
import useFlip from "./hooks";

function PokemonCard({ name, imageFront, imageBack }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} style={{ cursor: "pointer" }}>
      <img src={isFlipped ? imageBack : imageFront} alt={name} />
    </div>
  );
}

export default PokemonCard;