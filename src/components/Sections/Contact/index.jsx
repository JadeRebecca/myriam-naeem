import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Description,
  Column2,
  ImgWrap,
  Img,
} from '../SectionElements'
import { BtnContainer } from './ContactElements'
import Btn from '../../Button'
import img from '../../../images/contact.svg'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLinkedinOption } from 'react-icons/gr'

const Contact = () => {
  return (
    <InfoContainer id="contact">
      <InfoWrapper>
        <Title>04. Contact</Title>
        <InfoRow>
          <Column1>
            <TextWrapper>
              {/* <Heading>Heading</Heading> */}
              <Description>
                Une idée de projet ?<br /> Une envie de discuter ?<br />
                N'hésitez pas à me contacter, je serais ravie d'échanger avec
                vous.
              </Description>
              <BtnContainer>
                <Btn
                  href="https://www.linkedin.com/in/jade-dupont/"
                  target="_blank"
                  icon={<GrLinkedinOption size={30} />}
                />
                <Btn
                  href="mailto:dupont.jade@gmail.com"
                  target="_blank"
                  icon={<HiOutlineMail size={30} />}
                />
              </BtnContainer>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="contact" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Contact
