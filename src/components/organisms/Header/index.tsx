import MainLogo from "../../molecules/LogoContainer"

import Navbar from "../../molecules/Navbar"

import { Container } from "./style"

const Header = () => {
  return (
    <Container>
      <MainLogo />
      
      <Navbar />
    </Container>
  )
}

export default Header