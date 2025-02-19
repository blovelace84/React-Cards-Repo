import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./useAxios";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

function PlayingCardList() {
    const [cards, addCard] = useAxios(BASE_URL);
  
    return (
      <div>
        <h2>Playing Card List</h2>
        <button onClick={() => addCard()}>Draw a Card</button>
        <div>
          {cards.map((card, index) => (
            card.cards && card.cards[0] ? ( // Ensure the card has data before accessing properties
              <PlayingCard
                key={index}
                frontImage={card.cards[0].image}
                backImage="cards/src/assets/back.png"
              />
            ) : (
              <p key={index}>Card data not available</p>
            )
          ))}
        </div>
      </div>
    );
  }

  export default PlayingCardList;