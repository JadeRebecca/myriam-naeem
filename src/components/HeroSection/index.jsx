import React from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';
import { BtnContainer, HeroContainer, HeroContent, HeroLink, HeroS1, HeroS2 } from './HeroElements';

const HeroSection = () => {
  const lang = useSelector((state) => state.languageReducer.language);

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
          <HeroLink to="projets" spy={true} smooth={true} offset={-80} duration={500}>
            {translation(lang, 'hero-button1')}
          </HeroLink>
          <HeroLink to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            {translation(lang, 'hero-button2')}
          </HeroLink>
        </BtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
