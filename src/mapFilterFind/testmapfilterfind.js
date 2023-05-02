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
  return color !== "🟡";
}); // DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLEN LA CONDICION

// -----------------------------------------------------

const obtenerAJuan = () => {
  const usuario = usuarios.find((usuario) => {
    return usuario.nombre === "Juan";
  });

  const draft = structuredClone(usuario);
  return draft;

  /* 
    return {
      ...usuario,
    }
  */
};
/* 
const juan = obtenerAJuan();
juan.nombre = "MODIFICADO";

console.table(juan);
console.table(usuarios[0]); */

//------------------------

let estado = [
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

const obetenerUsuarioPorApellido = (apellido) => {
  const usuario = estado.find((usuario) => {
    return usuario.apellido === apellido;
  });

  const draft = structuredClone(usuario);
  return draft;
};

const crearUsuario = () => {};
const obtenerUsuarioPorId = (id) => {
  const usuario = estado.find((usuario)=>{
    return usuario.id === id;
  })
  const draft = structuredClone(usuario)
  return draft;
};
const eliminarUsuarioPorId = (id) => {
  const usuario = estado.filter((usuario)=>{
    return usuario.id !== id;
  })
  const draft = structuredClone(usuario)
  return draft;
};
const actualizarUsuarioPorId = () => {};




console.table(estado)
console.table(obetenerUsuarioPorApellido("Perez"))
console.table(obtenerUsuarioPorId(2))
console.table(eliminarUsuarioPorId(1))

