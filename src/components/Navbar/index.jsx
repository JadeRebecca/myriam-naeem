import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import ThemeToggler from '../ThemeToggler'
import {
  Nav,
  NavLogoLink,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavAnchor,
  NavBtn,
} from './NavbarElement'
import Btn from '../Button'
import Pdf from '../../docs/cv_fr.pdf'

const Navbar = ({ toggle, theme, themeToggler }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
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
              <NavLink
                to="accueil"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Accueil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="projets"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavAnchor
                href="https://www.linkedin.com/in/myriam-naeem/"
                target="_blank"
              >
                Linkedin
              </NavAnchor>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Btn href={Pdf} target="_blank" text="CV" />
          </NavBtn>
          <NavBtn>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
