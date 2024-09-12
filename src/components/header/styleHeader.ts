import styled from "styled-components";
import logo from "../../assets/img/logo.png";

export const HeaderContainer = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(77, 77, 77, 1) 19%,
    rgba(165, 165, 166, 1) 50%,
    rgba(77, 77, 77, 1) 78%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: 100%;
  overflow: auto;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 900px) {
    height: 240px;
  }

  @media (max-width: 700px) {
    height: 180px;
  }

  @media (max-width: 560px) {
    height: 140px;
  }

  @media (max-width: 400px) {
    height: 110px;
  }
`;

export const Menu = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px 10px 20px;
`;

export const AddTouristSpot = styled.a`
  display: flex;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(85, 85, 85, 0.4);
  }
`;

export const Contacts = styled.a`
  display: flex;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(85, 85, 85, 0.4);
  }
`;
