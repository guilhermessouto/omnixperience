import { Container, Text, ContentContainer } from "./style"

type Props = {
  cep: string | undefined
  bairro: string | undefined
  localidade: string | undefined
  uf: string | undefined
  logradouro: string | undefined
}

const CepCard = (props: Props) => {
  return (
    <Container>
      <ContentContainer>
        <Text>
          Cep: {props.cep}.
        </Text>
      </ContentContainer>
      <ContentContainer>
        <Text>
          Bairro: {props.bairro}.
        </Text>
      </ContentContainer>
      <ContentContainer>
        <Text>
          Localidade: {props.localidade}.
        </Text>
      </ContentContainer>
      <ContentContainer>
        <Text>
          Uf: {props.uf}.
        </Text>
      </ContentContainer>
      <ContentContainer>
        <Text>
          Logradouro: {props.logradouro}.
        </Text>
      </ContentContainer>
    </Container>
  )
}

export default CepCard