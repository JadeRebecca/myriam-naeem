import React from 'react'
import ButtonLink from '../Button'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="accueil" onClick={toggle}>
            Accueil
          </SidebarLink>
          <SidebarLink to="projet" onClick={toggle}>
            Projets
          </SidebarLink>
          <SidebarLink to="linkedin" onClick={toggle}>
            LinkedIn
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonLink text="CV" />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
