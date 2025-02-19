// src/PlayingCardList.js
import React from "react";
import useAxios from "../hooks/useAxios";
import PlayingCard from "./PlayingCard";
import {  formatPlayingCard, formatPokemon } from "../helpers/formatters";
import "./PlayingCardList.css";

const PlayingCardList = () => {
  const [cards, addCard, clearCards] = useAxios("", formatPokemon);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card!</h3>
      <button onClick={addCard}>Add a playing card</button>
      <button onClick={clearCards}>Clear all cards</button>
      <div className="card-container">
        {cards.map(card => (
          <PlayingCard key={card.id} frontImage={card.image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;