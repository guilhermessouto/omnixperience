import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPlusLg } from 'react-icons/bs'

import { Button, Container } from './style'
import React from 'react'

type Props = {
  isMenuOpen: boolean
  onClick: any
}

const HambLogoSVG = (props: Props) => {
  
  return (
    <Container>
      <Button
        onClick={() => props.onClick()}
      >
        {props.isMenuOpen ? <BsPlusLg /> : <GiHamburgerMenu />}
      </Button>
    </Container>
  )
} 

export default HambLogoSVG