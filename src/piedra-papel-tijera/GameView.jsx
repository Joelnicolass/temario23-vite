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
  return <div></div>;
};

export default GameView;
