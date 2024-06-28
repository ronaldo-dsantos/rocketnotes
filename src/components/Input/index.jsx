import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }){ // Icon recebe icon, manobra realizada para respeitar o princípio que todo componente deve começar com letra maiúscula
  return(
    <Container>
      {Icon && <Icon size={20} />} 
      <input {...rest} />
    </Container>
  )
}