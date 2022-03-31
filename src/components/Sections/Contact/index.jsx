import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import Btn from '../../Button'
import { Title } from '../../SectionTitle/SectionTitleELements'
import {
  Description, InfoContainer,
  InfoWrapper, TextWrapper
} from '../SectionElements'
import { BtnContainer } from './ContactElements'

const Contact = () => {
  return (
    <InfoContainer id="contact">
      <InfoWrapper>
        <Title>Me contacter</Title>
      
            <TextWrapper>
              {/* <Heading>Heading</Heading> */}
              <Description>
              N’hésitez pas à me contacter, je serai ravie d’échanger avec vous !
              </Description>
              <BtnContainer>
                <Btn
                  href="https://www.linkedin.com/in/myriam-naeem/"
                  target="_blank"
                  icon={<GrLinkedinOption size={30} />}
                />
                <Btn
                  href="mailto:myriam@naeem.fr"
                  target="_blank"
                  icon={<HiOutlineMail size={30} />}
                />
              </BtnContainer>
            </TextWrapper>
         
       
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Contact
