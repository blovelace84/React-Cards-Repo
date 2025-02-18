import React from "react";
import useFlip from "../hooks";
import cardBack from "../assets/back.png";
import "./PlayingCard.css";

const PlayingCard = ({frontImage}) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div className="playing-card" onClick={toggleFlip}>
            <img src={isFlipped ? frontImage: cardBack} alt="Playing Card" />
        </div>
    );
}

export default PlayingCard;