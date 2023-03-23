import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid white",
  borderRadius: "10px",
  width: "300px",
};

const Card = ({ user, deleteUser }) => {
  return (
    <div style={styleCard}>
      <h1>{user.nombre}</h1>
      <h2>{user.apellido}</h2>
      <h5>{user.profesion}</h5>
      <button
        onClick={() => {
          deleteUser(user.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Card;
