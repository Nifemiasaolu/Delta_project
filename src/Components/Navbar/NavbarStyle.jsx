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
export const  NavLogo = styled(Link)
export const  NavIcon = styled.img`
  
`
export const  MobileIcon = styled.div`
`
export const  NavMenu = styled.ul`
  
`
export const  NavLinks = styled.span`
  
`
export const  NavItem = styled.li`
  
`
