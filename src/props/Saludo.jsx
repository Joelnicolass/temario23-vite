import React from "react";

/* 
    const props = {
        name: 'Fernanda'
    }

    const {name} = props

    props.name
*/

const Saludo = ({ name }) => {
  return <div>Hola {name}</div>;
};

export default Saludo;
