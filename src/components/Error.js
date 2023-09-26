import styled from "@emotion/styled"

const Text = styled.div`
background-color: #b7332c;
font-family: Lato, sans-serif;
font-size: 1.5rem;
text-transform: uppercase;
text-align: center;
font-weight: 700;
color: #fff;
padding: 1.5rem;
`

const Error = ({children}) => {
  return (
      <Text>
          {children}
    </Text>
  )
}

export default Error