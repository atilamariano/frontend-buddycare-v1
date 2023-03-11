import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 25%;
  space-between: 10rem;
  height: 150px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 30px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }

  h3 {
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

export const CloseButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
