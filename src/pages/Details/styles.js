import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; // Display grid para deixarmos o Header fixo na tela
  grid-template-rows: 105px auto; // Header 105px e o restante da página ajuste automático
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    grid-area: "Content";
    overflow-y: scroll;
    padding: 64px 0;
  }
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

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end; // Alinhamento no próprio botão trazendo ele para o final
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`
