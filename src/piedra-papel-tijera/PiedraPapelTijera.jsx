import React, { useState } from "react";

const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const PiedraPapelTijera = () => {
  const [selectionPlayerState, setSelectionPlayerState] = useState(null);
  const [selectionIAState, setSelectionIaState] = useState(null);
  const [resultState, setResultState] = useState(null);

  const SELECTIONS = {
    ROCK: "piedra",
    PAPER: "papel",
    SCISSORS: "tijera",
  };

  const getSelectionIA = () => {
    const selections = Object.values(SELECTIONS);
    return getRandomElementFromArray(selections);
  };

  const play = (selectionPlayer) => {
    // si se hace un setState
    // no se puede ocupar el estado inmediatamente debajo

    const selectionIA = getSelectionIA();

    // evaluacion

    //-----------

    setSelectionPlayerState(selectionPlayer);
    setSelectionIaState(selectionIA);
    setResultState("gano tal");
  };

  return (
    <div>
      <div>
        <h1>Titulo</h1>
      </div>

      <div>
        <h3>
          Tu: {selectionPlayerState} vs IA: {selectionIAState}
        </h3>
      </div>

      <div>
        <button
          onClick={(e) => {
            play(SELECTIONS.ROCK);
          }}
        >
          🪨
        </button>
        <button
          onClick={(e) => {
            play(SELECTIONS.PAPER);
          }}
        >
          🧻
        </button>
        <button
          onClick={(e) => {
            play(SELECTIONS.SCISSORS);
          }}
        >
          ✂️
        </button>
      </div>
    </div>
  );
};

export default PiedraPapelTijera;
