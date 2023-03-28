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
  const [eleccion, setEleccion] = useState(null);
  const [eleccionIA, setEleccionIA] = useState(null);
  const [resultado, setResultado] = useState(null);

  const handleClick = (eleccion) => {
    console.log(eleccion);

    // que juegue la IA

    // comparar eleccion con eleccionIA

    // guardar el resultado
  };

  return (
    <div>
      <h1>Piedra Papel Tijera</h1>

      <div>
        <button
          onClick={() => {
            handleClick("piedra");
          }}
        >
          🪨
        </button>
        <button
          onClick={() => {
            handleClick("papel");
          }}
        >
          🧻
        </button>
        <button
          onClick={() => {
            handleClick("tijera");
          }}
        >
          ✂️
        </button>
      </div>

      <div>
        <h2>Tu eleccion</h2>
        <h2>IA</h2>
        <h2>Gana </h2>
      </div>
    </div>
  );
};

export default GameView;
