import React from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import Btn from '../../Button';
import { Title, Description, InfoContainer, InfoWrapper, TextWrapper } from '../SectionElements';
import { BtnContainer } from './ContactElements';

const Contact = () => {
  const lang = useSelector((state) => state.languageReducer.language);
  return (
    <InfoContainer id="contact">
      <InfoWrapper>
        <Title>{translation(lang, 'contact-title')}</Title>
        <TextWrapper>
          <Description>{translation(lang, 'contact-text')}</Description>
          <BtnContainer>
            <Btn
              href="https://www.linkedin.com/in/myriam-naeem/"
              target="_blank"
              icon={<GrLinkedinOption size={30} />}
            />
            <Btn href="mailto:myriam@naeem.fr" target="_blank" icon={<HiOutlineMail size={30} />} />
          </BtnContainer>
        </TextWrapper>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Contact;
