import React, { useState } from "react";

import usersList from "../assets/utils/users.json";
import Card from "./Card";

const UserView = () => {
  const users = usersList.usuarios;

  return (
    <div>
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserView;
