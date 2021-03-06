import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
}
`;

export const NavbarContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-left: 24px;
  padding-right: 50px;

  // @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
  //   padding: 0 6px;
  // }
`;

export const NavLogoLink = styled(LinkS)`
  color: ${({ theme }) => theme.white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavLogo = styled.img`
  height: 80%;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    color: ${({ theme }) => theme.white};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  width: 100px;
`;
export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font_weight: 500;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};

  &.active {
    padding-bottom: 0px;
    border-bottom: 4px solid ${({ theme }) => theme.secondary};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`;
export const NavAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};

  &.active {
    padding-bottom: 0px;
    border-bottom: 4px solid ${({ theme }) => theme.secondary};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.secondary};
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`;
export const NavSelect = styled.select`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`;
