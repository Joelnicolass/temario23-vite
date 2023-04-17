import React, { useRef } from "react";

const ReferenciaDeElementos = () => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h1>Referencia de Elementos</h1>
      <input ref={inputRef} type="text" name="nombre" onChange={handleChange} />
    </div>
  );
};

export default ReferenciaDeElementos;
