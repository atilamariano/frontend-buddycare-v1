import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import Card1 from '../../assets/img/card1.png';
import Card2 from '../../assets/img/card2.png';
import Card3 from '../../assets/img/card3.png';
import NavBar from '../../components/navbar/Navbar';
import {
  Container,
  Card,
  Modal,
  ModalContent,
  CloseButton,
  StyleDivH1,
  Body,
  StyledH2,
  StyleDivH2,
} from './styleHome';

export function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

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
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

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
          <Card onClick={() => handleCardClick(1)} style={{ backgroundImage: `url(${Card1})`, backgroundSize: 'cover' }}>
            <h3>Atendimento Psicológico Online</h3>
          </Card>
          <Card onClick={() => handleCardClick(2)} style={{ backgroundImage: `url(${Card2})`, backgroundSize: 'cover' }}>
            <h3>Profissionais de Alta Qualidade</h3>
          </Card>
          <Card onClick={() => handleCardClick(3)} style={{ backgroundImage: `url(${Card3})`, backgroundSize: 'cover' }}>
            <h3>Atendimento de Qualidade que Cabe no Seu Bolso</h3>
          </Card>

          {showModal1 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(1)}>X</CloseButton>
                <p>O atendimento psicológico online tem se tornado cada vez mais popular e acessível, permitindo que pessoas de diferentes lugares do mundo tenham acesso aos serviços de um psicólogo qualificado sem precisar sair de casa. E aqui, podemos afirmar que temos o melhor atendimento psicológico online.<br /><br />

                  Ao optar por um atendimento psicológico online, você pode ter acesso a uma série de benefícios, como a conveniência e a flexibilidade de escolher o horário mais adequado para as suas sessões, bem como a privacidade e o anonimato para discutir questões delicadas e pessoais.</p>
                <button onClick={() => handleCloseModal(1)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal2 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(2)}>X</CloseButton>
                <p>Para garantir que o atendimento psicológico online seja eficaz, é importante escolher um profissional qualificado e experiente, que possa fornecer um ambiente seguro e acolhedor para que você possa se sentir à vontade para compartilhar seus pensamentos e sentimentos.<br /><br />

                  Nós da Buddy Care, como prestadores de serviços de atendimento psicológico online, nos comprometemos em fornecer um ambiente seguro e acolhedor para nossos pacientes, onde eles possam sentir-se confortáveis ​​para explorar seus problemas e questões mais profundas. Contamos com uma equipe de psicólogos experientes e altamente qualificados, que possuem formação e habilidades específicas para oferecer atendimento psicológico online de qualidade.<br /><br />

                  Nosso atendimento é personalizado e adaptado às necessidades individuais de cada paciente, garantindo que cada pessoa receba a atenção e o suporte que precisa para superar seus desafios e alcançar seus objetivos.</p>
                <button onClick={() => handleCloseModal(2)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal3 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(3)}>X</CloseButton>
                <p>Além de fornecer o melhor atendimento psicológico online, também nos comprometemos a oferecer preços acessíveis para nossos pacientes. Sabemos que o acesso a cuidados de saúde mental de qualidade pode ser caro e muitas pessoas não têm recursos financeiros para arcar com os altos custos.<br /><br />

                  Por isso, temos preços acessíveis e competitivos, para garantir que nossos serviços estejam disponíveis para todos que precisam de suporte emocional e psicológico. Nosso objetivo é tornar o atendimento psicológico online acessível e disponível para todas as pessoas, independentemente de sua situação financeira.<br /><br />

                  Temos pacotes de sessões com preços especiais e flexíveis, que podem ser adaptados às necessidades individuais de cada paciente. Além disso, oferecemos opções de pagamento seguras e convenientes, para tornar o processo de agendamento e pagamento fácil e sem complicações.</p>
                <button onClick={() => handleCloseModal(3)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}
        </Container>
      </Body>
    </>
  );
}
