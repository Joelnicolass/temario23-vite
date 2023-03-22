import React from "react";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  border: "1px solid white",
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
};

const Card = ({ user }) => {
  return (
    <div style={cardStyle}>
      <h1>{user.nombre}</h1>
      <h2>{user.apellido}</h2>
    </div>
  );
};

export default Card;
