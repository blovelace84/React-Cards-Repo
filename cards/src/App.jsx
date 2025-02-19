import React from "react"
import PlayingCardList from "./PlayingCardList"
import PokeDex from "./PokeDex";


function App() {
  return (
    <div className="App">
      <h1>Pick a Card:</h1>
      <PlayingCardList />
      <PokeDex />
    </div>
  )
}

export default App;
