import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../Hooks/useSelectMonedas';
import {monedas} from '../data/monedas'
import { useState } from 'react';

const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width:100%;
padding: 10px;
color: #FFF;
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
border-radius:5px;
margin-top:30px;
transition: background-color .3s ease-in-out;

&:hover{
  background-color: #7A7DFE;
  cursor:pointer;
}

`


const Formulario = () => {

  const [ criptos, setCriptos] = useState([''])
  const [moneda, SelectMonedas] = useSelectMonedas('Eige tu moneda', monedas);
  const [criptoMoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu cryptomoneda", criptos);
  const [error, setError] = useState(false)

useEffect(() => {
  const consultarAPI = async () => {
    const url = 'https://min-api-v2.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    
    const arrayCriptos = resultado.Data.map(cripto => {

      const objeto = {
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      };
      return objeto
    })

    setCriptos(arrayCriptos)
  }
  consultarAPI()
}, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([moneda, criptoMoneda].includes('')) {
      setError(true)

      return
    }

  }

  return (
    <>
      
      {error && <p>Todos los camòs obligatorios</p>}
      <form
      onSubmit={handleSubmit}
      >
        <SelectMonedas />
        <SelectCriptomoneda />

        <InputSubmit type="submit" value="corizar" />
      </form>
    </>
  );
}

export default Formulario