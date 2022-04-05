import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PdfFr from '../../../docs/cv_fr.pdf';
import PdfEn from '../../../docs/cv_en.pdf';
import { translation } from '../../../I18n/i18n';
import ButtonLink from '../../Button';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarAnchor,
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
  const lang = useSelector((state) => state.languageReducer.language);
  const dispatch = useDispatch();

  const handleChange = () => {
    let newLang = 'en';
    if (lang === 'en') newLang = 'fr';
    dispatch({ type: newLang });
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="accueil" onClick={toggle}>
            {translation(lang, 'menu1')}
          </SidebarLink>
          <SidebarLink to="projets" onClick={toggle}>
            {translation(lang, 'menu2')}
          </SidebarLink>
          <SidebarAnchor href="https://www.linkedin.com/in/myriam-naeem/" target="_blank">
            LinkedIn
          </SidebarAnchor>
          <SidebarLink to="contact" onClick={toggle}>
            {translation(lang, 'menu3')}
          </SidebarLink>
          <SidebarLink to="accueil" onClick={handleChange}>
            {translation(lang, 'menu-language')}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonLink
            href={lang === 'en' ? PdfEn : PdfFr}
            target="_blank"
            text={translation(lang, 'menu-download')}
          />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
