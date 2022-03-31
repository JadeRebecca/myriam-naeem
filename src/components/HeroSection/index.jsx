import React from 'react'
import Btn from '../Button'
import {
  BtnContainer, HeroContainer,
  HeroContent, HeroS1,
  HeroS2
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
          <Btn text="Voir mes projets"/>
          <Btn text="me contacter"/>
        </BtnContainer>
      </HeroContent>
     
    </HeroContainer>
  )
}

export default HeroSection
