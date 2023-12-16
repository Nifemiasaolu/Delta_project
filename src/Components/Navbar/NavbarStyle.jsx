import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";

export const  Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;

  transition: background-color 0.3s ease-in;
`
export const  NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;

  ${Container}
`
export const  NavLogo = styled(Link)`
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`

export const  NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`
export const  MobileIcon = styled.div`
  display: none;
  z-index: 50;

  /* @media screen and (max-wi) */
`
export const  NavMenu = styled.ul`
  
`
export const  NavLinks = styled.span`
  
`
export const  NavItem = styled.li`
  
`
// ///