import React, { useState } from "react";
import Card from "./components/Card";
import { Input } from "./FormularioStyled";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [validacion, setValidacion] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    /*let validacionTresCaracteres = false;
    let validacionSeisCaracteres = false; */

    if (nombre.trim().length >= 3 && color.length >= 6) {
      setShowCard(true);
      setValidacion(false);
      // console.log("Es mayor a 3 caracteres");
    } else {
      setValidacion(true);
      setShowCard(false);
    }
    /* 
    if (color.length >= 6) {
      validacionSeisCaracteres = true;
      console.log("Es mayor o igual a 6 caracteres");
    }
    if (
      validacionTresCaracteres === true &&
      validacionSeisCaracteres === true
    ) {
      setValidacionOk(true);
      setValidacion(false);
      console.log("Renderizar Componente");
    } else {
     
      console.log("Por favor Chequee que la informacion sea correcta");
    } */
  };

  return (
    <>
      <form
        id="login-form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>Nombre</span>
        <Input
          type={"text"}
          placeholder={`Ingrese su nombre`}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <span>Color</span>
        <Input
          type={"text"}
          placeholder={`Ingresa tu color favorito (formato HEX)`}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
      <div
        style={{
          display: "flex",
          backgroundColor: "brown",
          flexDirection: "column",
          margin: "10px 0px",
        }}
      >
        <button form="login-form" btn="submit">
          Enviar
        </button>
      </div>

      {validacion && (
        <h2>"Por favor chequea que la información sea correcta"</h2>
      )}
      {showCard && <Card name={nombre} colour={color} />}
    </>
  );
};

export default Formulario;
