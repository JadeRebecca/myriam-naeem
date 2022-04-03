import React from 'react'
import { FooterContainer, FooterLink, FooterLogo, FooterText } from './FooterElements'

const Footer = () => {
  const handleClick = () => {
    window.open('https://jade-dupont-portfolio.web.app/')
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
