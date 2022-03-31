import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Description,
  Forth,
  Column2,
  ImgWrap,
  Img,
} from '../SectionElements'
import img from '../../../images/remote.svg'

const About = () => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
      
        
            <TextWrapper>
              <Title>A propos de moi</Title>
              <Description>
                Diplômée d’un master en Webmarketing et passionnée par la data ainsi que la mise en place de recommandations
                concrètes, j'ai travaillé pour des pures players dont l'importance de la donnée était structurant.
                Par ailleurs, mon expérience en marketing digital et mes compétences techniques me permettent d'être en phase avec les
                besoins métiers et les contraintes techniques.
                Soif de nouveaux challenges, je suis disponible dès à présent pour relever de nouveaux défis où l’enjeu de la donnée est
                primordial.
              </Description>
            </TextWrapper>
         
          
      
      </InfoWrapper>
    </InfoContainer>
  )
}

export default About
