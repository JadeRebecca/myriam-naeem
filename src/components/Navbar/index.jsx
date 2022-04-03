import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import Pdf from '../../docs/cv_fr.pdf'
import Btn from '../Button'
import {
  MobileIcon, Nav, NavAnchor, NavbarContainer, NavBtn, NavItem,
  NavLink, NavLogoLink, NavMenu
} from './NavbarElement'

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
            <NavBtn>
            <Btn href={Pdf} target="_blank" text="CV" />
          </NavBtn>
          </NavMenu>
         
          {/* <NavBtn>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
