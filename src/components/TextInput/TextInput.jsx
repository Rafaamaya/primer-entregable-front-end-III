import React from "react";
import { InputStyle } from "./TextInputStyle";

const Rafa = ({ name, placeholder, value, onChange }) => {
  return (
    <InputStyle
      name={name}
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Rafa;
