import React from "react";
import useFlip from "../hooks";

const PlayingCard = ({frontImage, backImage}) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div className="playing-card" onClick={toggleFlip}>
            <img src={isFlipped ? backImage : frontImage} />
        </div>
    );
}

export default PlayingCard;