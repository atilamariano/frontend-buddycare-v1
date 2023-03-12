import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledDropdown, StyledDropdownToggle, StyledDropdownMenu, StyledDropdownItem, StyleNavbar, StyleLink } from './styleNavbar';
import { useState } from 'react';
import Icon from '../../assets/img/icon.png'

function NavBar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <style type="text/css">
        {`
    .navbar-toggler {
      background-color: rgba(0,0,0,0.0);
      border: none;
    }
    `}

      </style>
      <Navbar bg="light" expand="lg">
        <StyleNavbar>
          <img src={Icon} width={25} alt="Ícone" />
          <StyleLink href="/">Buddy Care</StyleLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="me-auto">
            <StyleLink href="/">Home</StyleLink>
            <StyledDropdown show={dropdownOpen} onToggle={handleDropdownToggle}>
              <StyledDropdownToggle className="navbar-toggler collapsed disabled" variant="success">
                Loguin
              </StyledDropdownToggle>
              <StyledDropdownMenu>
                <StyledDropdownItem onClick={handleDropdownClose}>Psicólogo</StyledDropdownItem>
                <StyledDropdownItem onClick={handleDropdownClose}>Paciente</StyledDropdownItem>
                <StyledDropdownItem onClick={handleDropdownClose}>Adminstrador</StyledDropdownItem>
              </StyledDropdownMenu>
            </StyledDropdown>
          </Nav>

        </StyleNavbar>
      </Navbar>
    </>
  );
}

export default NavBar;