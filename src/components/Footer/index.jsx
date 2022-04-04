import React from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';
import { FooterContainer, FooterLink, FooterLogo, FooterText } from './FooterElements';

const Footer = () => {
  const lang = useSelector((state) => state.languageReducer.language);

  const handleClick = () => {
    window.open('https://jade-dupont-portfolio.web.app/');
  };
  return (
    <FooterContainer>
      <FooterLogo>MN</FooterLogo>
      <FooterLink onClick={handleClick}>{translation(lang, 'footer-line1')}</FooterLink>
      <FooterText> {translation(lang, 'footer-line2')}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
