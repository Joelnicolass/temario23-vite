/* 
  Las props son propiedades que se pasan a un componente
  para que este las pueda utilizar.

  Para comprender mejor las props, recordemos que los componentes son funciones. Entonces podriamos pensar a las props como un objeto
  que se pasa como parametro a la funcion.

  const fn = (props) => {}

  Para utilizar las props dentro de un componente, debemos declararlas como parametro de la funcion.
  
  const Componente = (props) => { return <></>}

  Luego, para acceder a las props, debemos utilizar la notacion de punto.

  props.nombre

  Otra forma de acceder a las props es utilizando la desestructuracion de objetos.

  const Componente = ({nombre}) => { return <></>}


  Para enviar props a un componente, debemos utilizar la notacion de etiqueta.

  <Componente nombre="Juan" />

  En el ejemplo anterior, estamos enviando la prop nombre con el valor "Juan".

  El nombre de la prop debe ser el mismo que el nombre de la variable que declaramos en el componente.

*/

import React, { useState } from "react";

import Saludo from "./Saludo";

const Contenedor = () => {
  const [nombre, setNombre] = useState("Juan");

  const cambiarNombre = (name) => {
    setNombre(name);
  };

  return (
    <div>
      <Saludo nombre={nombre} />
      <button
        onClick={() => {
          cambiarNombre("Nico");
        }}
      >
        cambiar nombre
      </button>
    </div>
  );
};

export default Contenedor;
