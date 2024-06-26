import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles"; // Importando o arquivo css

export function Header(){ // Exportando o Header
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/ronaldo-dsantos.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Ronaldo Domingues</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine /> 
      </Logout>

    </Container>
  )

}

