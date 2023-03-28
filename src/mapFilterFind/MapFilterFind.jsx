import React from "react";

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
  },
];

const colores = ["🔴", "🟠", "🟡", "🟢"];

const amarillo = colores.find((color) => {
  return color === "🟡";
}); // DEVUELVE EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION, NO GENERA UN ARRAY

const diferentesDeAmarillo = colores.filter((color) => {
  return color === "🟡";
}); // DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLEN LA CONDICION

// -----------------------------------------------------

const obtenerUsuarioPorNombre = (nombre) => {
  const usuario = usuarios.find((usuario) => {
    return usuario.nombre === nombre;
  });
  const draft = structuredClone(usuario);
  return draft;
};

const juan = obtenerUsuarioPorNombre("Juan");

// LOS OBJETOS EN JS SE PASAN POR REFERENCIA
//console.table(usuarios[0]);
console.table(juan);

//------------------------

let estado = structuredClone(usuarios);

const obetenerUsuarioPorApellido = (apellido) => {
  const usuario = estado.find((usuario) => {
    return usuario.apellido === apellido;
  });

  const draft = structuredClone(usuario);
  return draft;
};

const crearUsuario = () => {};
const obtenerUsuarioPorId = () => {};
const eliminarUsuarioPorId = () => {};
const actualizarUsuarioPorId = () => {};

const MapFilterFind = () => {
  return <div>MapFilterFind</div>;
};

export default MapFilterFind;
