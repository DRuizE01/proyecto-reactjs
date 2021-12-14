import React from "react";

import "./style.css";

import Etiqueta1 from './components/Etiqueta1';

//export default function Etiqueta1

export default function App() {

  return (

    <div>

      <h1>Hello StackBlitz!</h1>

      <p>Start editing to see some magic happen :)</p>


      <Etiqueta1 nombre = "PruebaProps1"/>
      <Etiqueta1 titulo="PruebaProps2"/>

    </div>

  );

}