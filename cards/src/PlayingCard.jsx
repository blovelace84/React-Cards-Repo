import React from "react";
import useFlip from "./hooks";

function PlayingCard({ frontImage, backImage }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} style={{ cursor: "pointer" }}>
      <img src={isFlipped ? backImage : frontImage} alt="Playing Card" />
    </div>
  );
}

export default PlayingCard;
