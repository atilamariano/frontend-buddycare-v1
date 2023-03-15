import styled from "styled-components";

export const SignupImg = styled.img`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupHome = styled.img`
  width: 7%;
  position: absolute;
  top: 20px;
  left: 35px;
  cursor: pointer;
`;

export const SingupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleRegister = styled.h2`
  margin: 0;
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const SubTitleSignup = styled.p`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const SigninTitleSignup = styled.p`
  margin: 0;
  text-align: center;
  color: rgb(230, 230, 230);
  cursor: pointer;
`;

export const SingupForm = styled.form`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(77, 77, 77, 1) 19%,
    rgba(165, 165, 166, 1) 50%,
    rgba(77, 77, 77, 1) 78%,
    rgba(0, 0, 0, 1) 100%
  );

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0  15px 0;

  @media (max-width: 960px) {
    width: 50%;
  }

  @media (max-width: 570px) {
    width: 80%;
  }
`;

export const SingupInput = styled.input`
  display: flex;
  width: 80%;
  height: 35px;
  border: 1px solid rgb(150, 150, 150);
  outline: none;
  margin: 5px;
  padding-left: 10px;
  font-size: 14px;
  box-shadow: 0 0 0px 1000px white inset;
`;

export const SingupButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  color: rgb(150, 150, 150);
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
  width: 50%;
  height: 35px;
  cursor: pointer;
  transition: all 0.8s ease-out;
`;
