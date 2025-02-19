import React from "react";
import useFlip from './hooks';
import backImage from "/src/assets/back.png"; // Adjust if necessary

function PlayingCard({ frontImage }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div 
      onClick={toggleFlip} 
      style={{ cursor: "pointer", textAlign: "center" }}
    >
      <img
        src={isFlipped ? backImage : frontImage}
        alt="Playing Card"
        style={{ width: "120px", height: "160px" }}
      />
    </div>
  );
}

export default PlayingCard;
