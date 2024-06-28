import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; // Display grid para deixarmos o Header fixo na tela
  grid-template-rows: 105px auto; // Header 105px e o restante da página ajuste automático
  grid-template-areas: // Nomeando as áreas que nosso grid vai ter
  "header"
  "content";
  
  > main { // O main foi criado para que ocupe todo o restante da tela e o content para limitar apenas o conteúdo e permitir a rolagem da tela
    grid-area: "Content"; // Definindo a area do nosso grid que a main vai ficar
    overflow-y: auto; // Quando o conteúdo não caber mais na tela, aparecer uma barra de rolagem
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

export const Content = styled.div` // Content criado para limitação do conteúdo dentro do main
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end; // Alinhamento no próprio botão trazendo ele para o canto
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
