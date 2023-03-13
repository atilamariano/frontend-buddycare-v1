import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import NavBar from '../../components/navbar/Navbar';
import {
  Container,
  Card,
  Modal,
  ModalContent,
  CloseButton,
  TextColor,
  StyleH1,
  StyleDivH1,
  TextContainer, Text,
  Body,
} from './styleHome';


export function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleCardClick = (index: number) => {
    switch (index) {
      case 1:
        setShowModal1(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (index: number) => {
    switch (index) {
      case 1:
        setShowModal1(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Body>
        <NavBar />
        <StyleDivH1>
          <img src={Logo} alt="Logo" />
        </StyleDivH1>

        <TextContainer>
          <Text>
            <TextColor>
              Acolhimento e cuidado para sua saúde mental. Contamos com profissionais altamente qualificados e oferecemos um atendimento personalizado com psicólogos especializados para cuidar da sua mente com dedicação e respeito. Cuide de você, cuide da sua saúde mental com Buddy Care.
            </TextColor>
          </Text>
        </TextContainer>

        <h2>
          Porque Escolher
        </h2>

        <Container>
          <Card onClick={() => handleCardClick(1)}>
            <h3>Card 1</h3>
          </Card>
          <Card onClick={() => handleCardClick(2)}>
            <h3>Card 2</h3>
          </Card>
          <Card onClick={() => handleCardClick(3)}>
            <h3>Card 3</h3>
          </Card>

          {showModal1 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(1)}>X</CloseButton>
                <p>Modal 1 content</p>
                <button onClick={() => handleCloseModal(1)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal2 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(2)}>X</CloseButton>
                <p>Modal 2 content</p>
                <button onClick={() => handleCloseModal(2)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal3 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(3)}>X</CloseButton>
                <p>Modal 3 content</p>
                <button onClick={() => handleCloseModal(3)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}
        </Container>
      </Body>
    </>
  );
}
