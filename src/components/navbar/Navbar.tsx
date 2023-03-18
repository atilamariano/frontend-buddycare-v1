import Navbar from 'react-bootstrap/Navbar';
import { StyleNavbar, StyleLink, StyelMenu, StyleSpan, StyleButton } from './styleNavbar';
import { useState, useRef, useEffect } from 'react';
import { ImHome } from 'react-icons/im';
import Icon from '../../assets/img/icon.png';
import Avatar from '@mui/material/Avatar';
import Avat from '../../assets/img/avatar.png'

// Define os itens de navegação da barra
interface NavItem {
  label: string;
  url: string;
}
const navItems: NavItem[] = [
  { label: "Psicólogo", url: "/signin" },
  { label: "Paciente", url: "/login" },
];

// Função que renderiza os itens de navegação
function renderNavItems(navItems: NavItem[], hideMenu: () => void) {
  return navItems.map((item) => (
    <li key={item.url}>
      <StyleLink href={item.url} onClick={hideMenu}>
        {item.label}
      </StyleLink>
    </li>
  ));
}

function handleLogout() {
  localStorage.removeItem("tokem"); // remove the token from localStorage
  setIsLoggedIn(false); // update the isLoggedIn state to false
}

function NavBar({ isLoggedIn, setIsLoggedIn }: { isLoggedIn: boolean, setIsLoggedIn: (isLoggedIn: boolean) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Define estado do menu aberto/fechado
  const navRef = useRef<HTMLUListElement>(null); // Referência para o elemento UL da navegação

  // Efeito que adiciona event listener ao clicar no botão de menu para fechar o menu se clicar fora dele
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

  // Função que alterna a visibilidade do menu
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // Função que esconde o menu
  function hideMenu() {
    setIsMenuOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("jwt"); // remove the token from localStorage
    setIsLoggedIn(false); // update the isUserLoggedIn state to false
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <StyleNavbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.2rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Icon} width={25} alt="Ícone" />
            <StyleLink href="/">Buddy Care</StyleLink>
          </div>
          <StyleLink href="/" style={{ textAlign: "center", padding: "0 0 0 5rem " }}> <ImHome /> Home</StyleLink>
          <StyelMenu className="me-auto">
            {/* Se o usuário estiver logado, exibe botões para configurações e logout */}
            {/* Se o usuário não estiver logado, exibe um botão para login */}
            {!isLoggedIn ?
              <StyleButton onClick={toggleMenu}>
                <StyleSpan>Login</StyleSpan>
              </StyleButton>
              :
              <>
                <StyleButton onClick={toggleMenu}>
                  <Avatar alt="Avatar" src={`${Avat}`} />
                </StyleButton>
              </>
            }
            {isMenuOpen && (
              <ul ref={navRef} style={{ position: 'absolute' }}>
                {isLoggedIn ? (
                  <>
                    <li>
                      <StyleLink href="/">Perfil</StyleLink>
                    </li>
                    <li>
                      <StyleLink href="/">Configurações</StyleLink>
                    </li>
                    <li>
                      <StyleLink onClick={handleLogout} href="/">Sair</StyleLink>
                    </li>
                  </>
                ) : (
                  renderNavItems(navItems, hideMenu)
                )}
              </ul>
            )}
          </StyelMenu>
        </StyleNavbar>
      </Navbar>
    </>
  );
}

export default NavBar;
function setIsLoggedIn(arg0: boolean) {
  throw new Error('Function not implemented.');
}

