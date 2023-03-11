import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Card,
  Modal,
  ModalContent,
  CloseButton,
} from './styleHome';
import ControlledCarousel from '../../components/carousel/Carousel';

const backgroundImage = '/images/background-image.jpg';

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
      <Container style={{ backgroundImage: `url(${backgroundImage})` }}>

        <h1>Bem-vindo ao nosso site</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          consectetur eros. Nullam at tellus euismod, pharetra risus sit amet,
          ultricies felis. Sed consequat eget augue a pulvinar.
        </p>

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
      <ControlledCarousel />
      </>
  );
}
