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
  StyledH2,
  StyleDivH2,
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
          <h1>Buddy Care - Cuidado emocional online ao seu alcance</h1>
        </StyleDivH1>

        <StyleDivH2>
          <StyledH2>
            Nossos Serviços
          </StyledH2>
        </StyleDivH2>

        <Container>
          <Card onClick={() => handleCardClick(1)}>
            <h3>Atendimento Psicológico Online</h3>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas reiciendis autem obcaecati voluptate inventore natus doloremque sed numquam, necessitatibus officia incidunt facilis! Libero temporibus beatae harum error veritatis. Illum..</p>
                <button onClick={() => handleCloseModal(1)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal2 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(2)}>X</CloseButton>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda accusamus neque, cumque officia facere rem, corporis repudiandae, unde exercitationem explicabo magnam. Dolore, vitae. Eos neque magnam nihil sint aliquid!</p>
                <button onClick={() => handleCloseModal(2)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal3 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(3)}>X</CloseButton>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia repellat aliquid eius quos optio ut, atque sequi magni maiores? Provident dolorem eligendi sint dolores ea velit quia quidem voluptas modi.</p>
                <button onClick={() => handleCloseModal(3)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}
        </Container>
      </Body>
    </>
  );
}
