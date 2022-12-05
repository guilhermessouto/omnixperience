import OffersCard from "../../molecules/offersCard"

import { CardsContainer, Container, Title } from "./style"

const Offers = () => {
  return (
    <Container>
      <Title>Nossas Ofertas:</Title>

      <CardsContainer>
        <OffersCard 
          velocity="100"
          cost="99,99"
        />
        <OffersCard 
          velocity="200"
          cost="199,99"
        />
        <OffersCard 
          velocity="300"
          cost="299,99"
        />
      </CardsContainer>
    </Container>
  )
}

export default Offers