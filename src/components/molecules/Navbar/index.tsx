import { useState } from 'react'

import HambLogoSVG from "../../atoms/HambLogo"

import { Anchor, ListContainer, Item } from "./style"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <HambLogoSVG 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <ListContainer showMenu={isMenuOpen}>
        <Item>
          <Anchor href="#">Planos</Anchor>
        </Item>
        <Item>
          <Anchor href="#">Atendimento</Anchor>
        </Item>
        <Item>
          <Anchor href="#">Quem Somos</Anchor>
        </Item>
        <Item>
          <Anchor href="#">FAQ</Anchor>
        </Item>
      </ListContainer>
    </nav>
  )
}

export default Navbar