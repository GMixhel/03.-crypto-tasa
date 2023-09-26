import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
color: #fff;
display: block;
font-family: lato, sans-serif;
font-size: 24px;
margin:15px 0;
font-weight: 700;
`

const Select = styled.select`
width: 100%;
font-size:14px;
border-radius: 10px;
margin-bottom: 20px;
padding: 14px;

`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')
  const SelectMonedas = () => (
    <>
          <Label>{label}</Label>
          <Select
              value={state}
              onChange={(e)=>setState(e.target.value)}
          
          >
              <option value="">Seleccione              
              </option>

              {opciones.map(opcion => (
                  <option
                        key={opcion.id} 
                      value={opcion.id} 
                  >{ opcion.nombre}</option>
              ))}
          </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
