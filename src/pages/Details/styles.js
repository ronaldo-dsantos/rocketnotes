import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; // Display grid para deixarmos o Header fixo na tela
  grid-template-rows: 105px auto; // Header 105px e o restante da página ajuste automático
  grid-template-areas: // Nomeando as áreas do grid
  "header"
  "content";  
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`


