import React from "react";

import comoQuieras from './comoQuieras';

export default function Etiqueta1(props) {
  //React.createElement("h1",null,"hola");

  return (
    <div>
      {props.nombre}
      {props.titulo}

      <ul>
        <comoQuieras item="patata" />
      </ul>
    </div>
  );
}
