import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { FaBars } from 'react-icons/fa';
import Pdf from '../../../docs/cv_fr.pdf';
import Btn from '../../Button';
import {
  MobileIcon,
  Nav,
  NavAnchor,
  NavbarContainer,
  NavBtn,
  NavItem,
  NavLink,
  NavLogoLink,
  NavMenu,
  NavSelect,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const lang = useSelector((state) => state.languageReducer.language);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: event.target.value });
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink to="/" onClick={toggleHome}>
            MN
          </NavLogoLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="accueil" spy={true} smooth={true} offset={-80} duration={500}>
                {translation(lang, 'menu1')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projets" spy={true} smooth={true} offset={-80} duration={500}>
                {translation(lang, 'menu2')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavAnchor href="https://www.linkedin.com/in/myriam-naeem/" target="_blank">
                LinkedIn
              </NavAnchor>
            </NavItem>
            <NavItem>
              <NavLink to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                {translation(lang, 'menu3')}
              </NavLink>
            </NavItem>
            <NavBtn>
              <Btn href={Pdf} target="_blank" text={translation(lang, 'menu-download')} />
            </NavBtn>
          </NavMenu>

          <NavSelect onChange={handleChange}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </NavSelect>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
