import React from 'react'
import { FooterContainer, Link, LinkEl, IconWrapper } from './FooterElements'
import { FaGithub } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/JadeRebecca/portfolio')
  }
  return (
    <FooterContainer>
      <Link onClick={handleClick}>
        <LinkEl>
          <IconWrapper>
            <FaGithub size={30} />
          </IconWrapper>
          <IconWrapper>
            <FaReact size={30} />
          </IconWrapper>
        </LinkEl>
        <LinkEl>Réalisé par Jade Dupont avec React JS</LinkEl>
      </Link>
    </FooterContainer>
  )
}

export default Footer
