import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles"; // Importando o arquivo css

export function Header(){ // Exportando o Header
  const { signOut } = useAuth()

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

      <Logout onClick={signOut}>
        <RiShutDownLine /> 
      </Logout>
    </Container>
  )
}

