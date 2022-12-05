import SubmitButton from "../../atoms/Button"
import { Container, Cost, Footer, Span, Text, Title } from "./styles"

type Props = {
  velocity: string
  cost: string
}

const OffersCard = (props: Props) => {
  return (
    <Container>
      <div>
        <Title>{props.velocity} <span>MB</span></Title>

        <Text>Fibra Óptica</Text>
        <hr />
        <Text>Instalação grátis</Text>
        <hr />
        <Text>Suporte técnico 24h, 7 dias por semana</Text>
      </div>

      <Footer>
        <Cost>
          a partir de 
          <br />
          <Span>{props.cost}</Span>
          /Mês
        </Cost>

        <SubmitButton label="Contrate agora"/>
      </Footer>

    </Container> 
  )
}

export default OffersCard