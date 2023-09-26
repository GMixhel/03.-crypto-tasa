import styled from "@emotion/styled"

const Contenedor = styled.div`
margin-top:3rem;
font-family: Lato, sans-serif;
display: flex;
align-items: center;
`
const Texto = styled.p`
  font-size: 1.1rem;
  font-weight:400;
  span {
    font-weight: 900;
  }
`;
const Imagen = styled.img`
 width:10rem;
`;
const Div = styled.div`
width:100%;
`
const Precio = styled.div`
font-size: 30px;

span{
  font-weight: 700;
}

`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />

      <Div>
        <Precio>
          El Precio es de:
          <br /> <spa>{PRICE}</spa>
        </Precio>
        <Texto>
          Precio más alto del día:<spa>{HIGHDAY}</spa>
        </Texto>
        <Texto>
          Precio más Bajo del día: <spa>{LOWDAY}</spa>
        </Texto>
        <Texto>
          Variación ultímas 24H : <spa>{CHANGEPCT24HOUR}</spa>
        </Texto>
        <Texto>
          Ultíma Actualización 24H : <spa>{LASTUPDATE}</spa>
        </Texto>
      </Div>
    </Contenedor>
  );
}

export default Resultado