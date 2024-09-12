
import Navbar from 'react-bootstrap/Navbar';
import { StyleNavbar, StyleLink, StyelMenu, StyleSpan } from './styleNavbar';
import { useState, useRef, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';
import Icon from '../../assets/img/icon.png';


interface NavItem {
  label: string;
  url: string;
}

const navItems: NavItem[] = [
  { label: "Psicólogo", url: "/psicologos" },
  { label: "Paciente", url: "/login" },
  { label: "Admin", url: "/login" },
];

function renderNavItems(navItems: NavItem[], hideMenu: () => void) {
  return navItems.map((item) => (
    <li key={item.url}>
      <StyleLink href={item.url} onClick={hideMenu}>
        {item.label}
      </StyleLink>
    </li>
  ));
}

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function hideMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <StyleNavbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.4rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Icon} width={25} alt="Ícone" />
            <StyleLink href="/">Buddy Care</StyleLink>
          </div>
          <StyleLink href="/" style={{ textAlign: "center", padding: "0 0 0 5rem " }}> <HiHome /> Home</StyleLink>
          <StyelMenu className="me-auto">
            <text onClick={toggleMenu}>
              <StyleSpan>Login</StyleSpan>
            </text>
            {isMenuOpen && (
              <ul ref={navRef} style={{ position: 'absolute' }}>{renderNavItems(navItems, hideMenu)}</ul>
            )}
          </StyelMenu>
        </StyleNavbar>
      </Navbar>
    </>
  );
}

export default NavBar;