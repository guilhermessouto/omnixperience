
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import Form from "../../molecules/Form"

import { Container, ContentContainer, Title } from "./style"

type Props = {
  cep: string
}

const Modal = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(values: Props) {
    setIsLoading(true)

    const { cep } = values

    const CepFormatted = cep?.replace(/[^0-9]/g, '')
    
    navigate(`/offers/${CepFormatted}`)
  }

  return (
    <Container>
      <ContentContainer>
        <Title>Seja bem-vindo!</Title>

        <Form 
          loading={isLoading}
          handleEnterSubmit={handleSubmit}
        />

        <a 
          href="https://buscacepinter.correios.com.br/app/endereco/index.php"
          target='_blank'
        >
          Não sei meu CEP.
        </a>
      </ContentContainer>
    </Container>
  )
}

export default Modal