import { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyle";
import {  useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/NavbarData";

function Navbar() {
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  function handleClick() {
    setShow((show) => !show);
  }

  function scrollTo(id) {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  function closeMobileMenu(to, id) {
    if (id && location.pathname === "/") scrollTo(id);

    // console.log(navigate);
    navigate(to);
    setShow(false);
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" />
            Delta
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>

          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavList
                el={el}
                key={index}
                onClick={() => closeMobileMenu(el.to, el.id)}
              />
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

function NavList({ el, onClick }) {
  return (
    <NavItem>
      <NavLinks onClick={onClick}>{el.text}</NavLinks>
    </NavItem>
  );
}

export default Navbar;
// //\\
