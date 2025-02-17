// src/PlayingCardList.js
import React from "react";
import useAxios from "../hooks/useAxios";
import PlayingCard from "./PlayingCard";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

function PlayingCardList() {
  const [cards, addCard] = useAxios(BASE_URL);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card!</h3>
      <button onClick={() => addCard()}>Add a playing card</button>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData, index) => (
          <PlayingCard
            key={index}
            frontImage={cardData.cards[0].image}
            backImage="https://via.placeholder.com/150" // Placeholder for back image
          />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
