import React from 'react'
import Btn from '../Button'
import {
  BtnContainer, HeroContainer,
  HeroContent, HeroS1,
  HeroS2,
  HeroLink
} from './HeroElements'


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          <HeroS1>Myriam Naeem</HeroS1>
        </p>
        <p>
          <HeroS2>Data analyst | Data scientist</HeroS2>
        </p>
        <BtnContainer>
          <HeroLink 
            to="projets" 
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Voir mes projets
          </HeroLink>
          <HeroLink 
            to="contact" 
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            me contacter
          </HeroLink>
        </BtnContainer>
      </HeroContent>
     
    </HeroContainer>
  )
}

export default HeroSection
