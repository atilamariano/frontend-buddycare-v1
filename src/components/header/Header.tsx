import { useNavigate } from 'react-router-dom';
import {
  AddTouristSpot,
  Contacts,
  HeaderContainer,
  LogoContainer,
  Menu,
} from "../header/styleHeader";

export const Header = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return (
    <HeaderContainer>
      <LogoContainer />
      <Menu>
        <AddTouristSpot onClick={handleClick}>HOME</AddTouristSpot>
        <Contacts onClick={() => {}}>CADASTRE-SE</Contacts>
        <Contacts onClick={() => {}}>ENTRAR</Contacts>
        <Contacts onClick={() => {}}>CHAT</Contacts>
        <Contacts onClick={() => {}}>CONTATO</Contacts>
        <Contacts onClick={() => {}}>SOBRE</Contacts>
      </Menu>
    </HeaderContainer>
  );
};
