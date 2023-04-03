import React, { useEffect, useState } from "react";

// CREAR UN PIEDRA PAPEL O TIJERA
// pueden utilizar el criterio que quieran para componetizar
// pueden utilizar el criterio que quieran para manejar el estado
// pueden utilizar el criterio que quieran para manejar la lógica del juego

// *se debe elegir una jugada
// *la computadora debe elegir una jugada
// *se debe mostrar el resultado

const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GameView = () => {
  const [selectionPlayerState, setSelectionPlayerState] = useState(null);
  const [selectionIAState, setSelectionIAState] = useState(null);
  const [resultState, setResultState] = useState(null);

  const SELECTIONS = {
    PIEDRA: "PIEDRA",
    PAPEL: "PAPEL",
    TIJERA: "TIJERA",
  };

  const CONDITIONS_WIN = {
    [SELECTIONS.PIEDRA]: SELECTIONS.TIJERA,
    [SELECTIONS.PAPEL]: SELECTIONS.PIEDRA,
    [SELECTIONS.TIJERA]: SELECTIONS.PAPEL,
  };

  const RESULTS = {
    WIN: "GANASTE",
    LOSE: "PERDISTE",
    DRAW: "EMPATE",
  };

  const evaluateWinner = (selectionPlayer, selectionIA) => {
    if (selectionPlayer === selectionIA) return RESULTS.DRAW;
    if (CONDITIONS_WIN[selectionPlayer] === selectionIA) return RESULTS.WIN;

    return RESULTS.LOSE;
  };

  const getSelectionIA = () => {
    const selections = Object.values(SELECTIONS);
    return getRandomElementFromArray(selections);
  };

  const play = (selectionPlayer) => {
    const selectionIA = getSelectionIA();
    const result = evaluateWinner(selectionPlayer, selectionIA);

    setSelectionPlayerState(selectionPlayer);
    setSelectionIAState(selectionIA);
    setResultState(result);
  };

  return (
    <div>
      <div>
        <h1>Titulo</h1>
      </div>

      <div>
        <h3>
          Tu: {selectionPlayerState} vs IA: {selectionIAState}{" "}
        </h3>
      </div>
      <div>
        <h3>{resultState}</h3>
      </div>

      <div>
        <button
          onClick={(e) => {
            play(SELECTIONS.PIEDRA);
          }}
        >
          🪨
        </button>
        <button
          onClick={(e) => {
            play(SELECTIONS.PAPEL);
          }}
        >
          🧻
        </button>
        <button
          onClick={(e) => {
            play(SELECTIONS.TIJERA);
          }}
        >
          ✂️
        </button>
      </div>
    </div>
  );
};

export default GameView;
