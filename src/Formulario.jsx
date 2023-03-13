import React, { useState } from "react";
import Card from "./components/Card/Card";
import TextInput from "./components/TextInput/TextInput";
import { objeto } from "./constant/Objeto";

const inputObjet = objeto

const Formulario = () => {
  const [values, setValues] = useState({ nombre: "", color: "" });
  const [validacion, setValidacion] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nombre.trim().length >= 3 && values.color.length >= 6) {
      setShowCard(true);
      setValidacion(false);
    } else {
      setValidacion(true);
      setShowCard(false);
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
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
        {inputObjet.map((field) => (
          <TextInput
            key={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={handleChange}
          />
        ))}
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
      {showCard && <Card name={values.nombre} colour={values.color} />}
    </>
  );
};

export default Formulario;
