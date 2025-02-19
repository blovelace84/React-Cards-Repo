import React from "react";
import useFlip from "../hooks";

const PokemonCard = ({ name, front, back, stats }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
    <div className="PokemonCard" onClick={toggleFlip}>
      <h3>{name}</h3>
      <img src={isFlipped ? back : front} alt={name} />
      <ul>
        {stats.map(stat => (
          <li key={stat.name}>
            <strong>{stat.name}:</strong> {stat.value}
          </li>
        ))}
      </ul>
    </div>
    );
}

export default PokemonCard;