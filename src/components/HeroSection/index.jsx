import React from 'react'

import {
  HeroContainer,
  HeroContent,
  BtnContainer,
  HeroS1,
  HeroS2,
  HeroS3,
  HeroS4,
} from './HeroElements'
import Btn from '../Button'

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
