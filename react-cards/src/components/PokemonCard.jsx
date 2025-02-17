import React from "react";
import useFlip from "../hooks";

const PokemonCard = ({ name, imageFront, imageBack }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div className="pokemon-card" onClick={toggleFlip}>
            <img src={isFlipped ? imageBack : imageFront} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default PokemonCard;