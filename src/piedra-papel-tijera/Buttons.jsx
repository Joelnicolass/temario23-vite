import React from "react";

const Buttons = () => {
  return (
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
  );
};

export default Buttons;
