import React from "react";
import EjercicioEstados1 from "./estados/Ejercicios/EjercicioEstados1";
import EstadosRepaso from "./estados/EstadosRepaso";
import Contenedor from "./props/Contenedor";
import ChildrenContenedor from "./children/ChildrenContenedor";
import UserView from "./mapeo/UserView";
import GameView from "./piedra-papel-tijera/GameView";

const App = () => {
  return (
    <>
      <GameView />
    </>
  );
};

export default App;
