import { Container, Links } from "./styles" // Importando o arquivo de estilos css

import { Header } from "../../components/Header" // Importando o Header
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details(){
 
  return(
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Links úteis">
        
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}