import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Card,
  Modal,
  ModalContent,
  CloseButton,
  TextColor,
  StyleH1,
  StyleDivH1,
  StyleDivText,
  Body,
} from './styleHome';
import MyCarousel from '../../components/carousel/Carousel';
import NavBar from '../../components/navbar/Navbar';
import styled from 'styled-components';

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

  const slides = [
    {
      title: "Slide 1",
      caption: "Lorem ipsum dolor sit amet",
      image: "https://picsum.photos/800/400?random=1",
    },
    {
      title: "Slide 2",
      caption: "Consectetur adipiscing elit",
      image: "https://picsum.photos/800/400?random=2",
    },
    {
      title: "Slide 3",
      caption: "Sed do eiusmod tempor incididunt",
      image: "https://picsum.photos/800/400?random=3",
    },
  ];

  return (
    <>
      <Body>
        <NavBar />
        <StyleDivH1>
          <StyleH1>Buddy Care</StyleH1>
        </StyleDivH1>
        
        <StyleDivText>
            <TextColor>
              Acolhimento e cuidado para sua saúde mental. Contamos com profissionais altamente qualificados e oferecemos um atendimento personalizado com psicólogos especializados para cuidar da sua mente com dedicação e respeito. Cuide de você, cuide da sua saúde mental com Buddy Care.
            </TextColor>
          </StyleDivText>
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

        {/* <MyCarousel slides={slides} /> */}
      </Body>
    </>
  );
}
