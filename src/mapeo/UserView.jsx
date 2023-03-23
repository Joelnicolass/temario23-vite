import React, { useState } from "react";
import json from "../assets/users.json";
import Card from "./Card";

/* 

        interface IUser {
          id: number;
          nombre: string;
          apellido: string;
          profesion: string;
        }

*/

const UserView = () => {
  const [users, setUsers] = useState(json.usuarios);

  const deleteUser = (id) => {
    // me tiene que devolver el array de usuarios sin el usuario que tenga el id que le estoy pasando
    //filter
    console.log("deleteUser", id);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      {users.map((user) => {
        return <Card key={user.id} user={user} deleteUser={deleteUser} />;
      })}
    </div>
  );
};

export default UserView;

// MIRAR PARA LA PROXIMA
/* 

  map

  filter

  find

  reduce (opcional)

*/
