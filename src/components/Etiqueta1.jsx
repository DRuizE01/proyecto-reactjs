import React from "react";

import ComoQuieras from './ComoQuieras';

export default function Etiqueta1(props) {

  return (
    <div>
      {props.nombre}
      {props.titulo}

      <ul>
        <ComoQuieras elemento="patata"/>
      </ul>
    </div>
  );
}
