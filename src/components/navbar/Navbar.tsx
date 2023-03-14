import Navbar from 'react-bootstrap/Navbar';
import { StyleNavbar, StyleLink, StyelMenu, StyleSpan, StyleButton } from './styleNavbar';
import { useState, useRef, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';
import Icon from '../../assets/img/icon.png';

// Define os itens de navegação da barra
interface NavItem {
  label: string;
  url: string;
}
const navItems: NavItem[] = [
  { label: "Psicólogo", url: "/signin" },
  { label: "Paciente", url: "/login" },
  { label: "Admin", url: "/login" },
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
  // aqui você pode adicionar a lógica para fazer o logout do usuário, como apagar o token do localStorage, por exemplo
  localStorage.removeItem("token"); // remove o token do localStorage
  setIsLoggedIn(false); // atualiza o estado isLoggedIn para false
}

function setIsLoggedIn(isLoggedIn: boolean) {
    // Armazena o valor de isLoggedIn no localStorage com a chave 'isLoggedIn'
  localStorage.setItem('isLoggedIn', String(isLoggedIn));
    // Define o estado de loggedIn como o valor de isLoggedIn
  setIsLoggedIn(isLoggedIn);
}


function NavBar({ isUserLoggedIn }: { isUserLoggedIn: boolean }) {
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
            {/* Se o usuário estiver logado, exibe botões para configurações e logout */}
            {/* Se o usuário não estiver logado, exibe um botão para login */}
            {!isUserLoggedIn ?
              <StyleButton onClick={toggleMenu}>
                <StyleSpan>Login</StyleSpan>
              </StyleButton>
              :
              <>
                <text onClick={toggleMenu}>
                  <StyleSpan>Configurações</StyleSpan>
                </text>
                <text onClick={handleLogout}>
                  <StyleSpan>Logout</StyleSpan>
                </text>
              </>
            }
            {isMenuOpen && (
              <ul ref={navRef} style={{ position: 'absolute' }}>
                {isUserLoggedIn ? (
                  <>
                    <li>
                      <StyleLink href="/">Perfil</StyleLink>
                    </li>
                    <li>
                      <StyleLink href="/">Mensagens</StyleLink>
                    </li>
                    <li>
                      <StyleLink href="/">Sair</StyleLink>
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