import React from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { Title } from '../../SectionTitle/SectionTitleELements';
import { Description, InfoContainer, InfoWrapper, TextWrapper } from '../SectionElements';

const About = () => {
  const lang = useSelector((state) => state.languageReducer.language);
  return (
    <InfoContainer id="accueil">
      <InfoWrapper>
        <TextWrapper>
          <Title>{translation(lang, 'about-title')}</Title>
          <Description>{translation(lang, 'about-line1')}</Description>
          <Description>{translation(lang, 'about-line2')}</Description>
          <Description>{translation(lang, 'about-line3')}</Description>
        </TextWrapper>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default About;
