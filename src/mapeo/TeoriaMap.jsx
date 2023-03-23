import React from "react";

// Map es un método de los arrays que recibe una función como parámetro, y devuelve un nuevo array con los elementos que devuelve la función
// cosnst nuevoArr = arr.map( () => {} )

// dicha funcion recibe como parámetro cada elemento del array
// const nuevoArr = arr.map( (elemento) => {} )

// y devuelve un nuevo elemento que será el que se agregue al nuevo array
// const nuevoArr = arr.map( (elemento) => { return elementoNuevo } )

// si la función es una arrow function, y solo devuelve un elemento, se puede omitir el return y las llaves
// const nuevoArr = arr.map( elemento => elementoNuevo )

const TeoriaMap = () => {
  const numeros = [1, 2, 3, 4, 5];
  const numerosMultiplicadosPorDos = numeros.map((numero) => numero * 2);

  //podemos usar map para crear un nuevo array de objetos, y no solo de valores primitivos
  const numerosMultiplicadosPorDosObjetos = numeros.map((numero) => {
    return {
      numeroOriginal: numero,
      numeroMultiplicadoPorDos: numero * 2,
    };
  });
  //------------------------------------------------------------------------------

  // Dentro del jsx podemos usar map para iterar sobre un array y devolver un componente por cada elemento del array
  return (
    <div>
      TeoriaMap
      <div>
        {numerosMultiplicadosPorDosObjetos.map((objeto) => {
          return (
            <div>
              <h1>Numero original: {objeto.numeroOriginal}</h1>
              <h1>
                Numero multiplicado por dos: {objeto.numeroMultiplicadoPorDos}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeoriaMap;
