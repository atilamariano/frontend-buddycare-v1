import styled from 'styled-components';
import Imagem from '../../assets/img/background.jpg';

export const Body = styled.body`
  position: relative;
  background-image: url(${Imagem});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;


export const ScrollableContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding-right: 15px; /* compensates for scrollbar width */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 5px;
  }
`;

export const Container = styled(ScrollableContainer)` /* aplicando o ScrollableContainer no Container */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.div`
  position: relative;
  width: 25%;
  height: 150px;
  border-radius: 20px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 30px;
  background-color: rgba(0, 0, 0, 0.0);


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }

  h3 {
    color: #ffffff;
    margin: 0;
  }
`;



export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;


export const StyleDivH1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;

  img {
    padding: 7rem 0 0 0;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  h1 {
    margin-top: 1rem;
    text-align: center;
    color: #ffffff;
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 0 0 0;
  }
};
`

export const StyleDivH2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid #ffffff;
`;


export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center; /* centraliza o texto */
  font-size: 1rem; /* tamanho da fonte */
  line-height: 1.5; /* altura das linhas */
  max-width: 800px; /* largura máxima do texto */
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const TextColor = styled.p`
color: #ffffff;
text-shadow: 1px 1px 1px black;
`;

export const StyleH1 = styled.h1`
color: #ffffff;
text-shadow: 1px 1px 1px  black;
`;

export const StyledH2 = styled.h2`
  color: white;
  text-align: center;
  font-size: 2rem;
`;



