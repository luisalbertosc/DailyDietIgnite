import { Container, Message } from "./styles";


export function ListEmpty(){
    return(
    <Container>
      <Message>Você ainda não tem refeições. Que tal cadastrar agora mesmo?</Message>
    </Container>
    )
}