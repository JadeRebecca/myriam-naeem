import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';
import ButtonLink from '../Button';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
  const lang = useSelector((state) => state.languageReducer.language);
  const dispatch = useDispatch();
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
          <SidebarLink to="linkedin" onClick={toggle}>
            LinkedIn
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            {translation(lang, 'menu3')}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonLink text={translation(lang, 'menu-download')} />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
