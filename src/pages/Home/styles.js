import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto; // grid duas colunas
  grid-template-rows: 105px 128px auto 64px; // grid 4 linhas
  grid-template-areas: // distribuição do conteúdo pelo grid
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
` 

export const Brand = styled.div`
  grid-area: brand; // definindo a area ocupada na distribuição do grid
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
` 

export const Menu = styled.ul`
  grid-area: menu; // definindo a area ocupada na distribuição do grid
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }
  
` 

export const Search = styled.div`
  grid-area: search; // definindo a area ocupada na distribuição do grid
  padding: 64px 64px 0;
  
` 

export const Content = styled.div`
  grid-area: content; // definindo a area ocupada na distribuição do grid
  padding: 0 64px;
  overflow-y: auto;  
`

export const NewNote = styled(Link)`
  grid-area: newnote; // definindo a area ocupada na distribuição do grid

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
  
`