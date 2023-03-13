import React from "react";
import { H1, P } from "./CardStyle";

const Card = ({ name, colour }) => {
  return (
    <div>
      <H1>Hola {name}!</H1>
      <P>Sabemos que tu color favorito es:</P>
      <div style={{backgroundColor:colour}}>
        <p>{colour}</p>
      </div>
    </div>
  );
};

export default Card;
