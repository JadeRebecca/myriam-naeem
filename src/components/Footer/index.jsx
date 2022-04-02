import React from 'react'
import { FooterContainer, FooterLink, FooterLogo, FooterText } from './FooterElements'

const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/JadeRebecca/portfolio')
  }
  return (
    <FooterContainer>
      <FooterLogo>
        MN
      </FooterLogo>
      <FooterLink onClick={handleClick}>
        Réalisé par Jade Dupont avec React JS
      </FooterLink>
      <FooterText>Tous droits réservés 2022©</FooterText>
    </FooterContainer>
  )
}

export default Footer
