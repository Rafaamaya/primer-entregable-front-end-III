import React, { useState } from "react";
import Card from "./components/Card/Card";
import TextInput from "./components/TextInput/TextInput";
import { objeto } from "./constant/Objeto";
import {
  A,
  Body,
  Button,
  Container,
  FormContainer,
  H1,
  OverlayContainer,
} from "./FormularioStyled";

const inputObjet = objeto;

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
    <Body>
      <Container>
        <FormContainer id="login-form" onSubmit={handleSubmit}>
          <H1>Fron-End III</H1>
          {inputObjet.map((field) => (
            <TextInput
              key={field.id}
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={handleChange}
            />
          ))}
          {validacion && (
            <A>"Por favor chequea que la información sea correcta"</A>
          )}
          <Button form="login-form" btn="submit">
            Enviar
          </Button>
        </FormContainer>
        {showCard && (
          <OverlayContainer>
            <Card name={values.nombre} colour={values.color} />
          </OverlayContainer>
        )}
      </Container>
    </Body>
  );
};

export default Formulario;
