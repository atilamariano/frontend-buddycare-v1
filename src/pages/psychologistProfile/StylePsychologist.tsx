import styled from 'styled-components';
import Imagem from '../../assets/img/backgroundPsicologo.png';

export const Body = styled.body`
  position: relative;
  background-image: url(${Imagem});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
`;
