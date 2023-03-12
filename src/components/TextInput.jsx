import React from 'react'
import { InputStyle } from './TextInputStyle'

const Rafa = ({placeholder, value, onChange}) => {
  return (
    <InputStyle
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}/>
  )
}

export default Rafa