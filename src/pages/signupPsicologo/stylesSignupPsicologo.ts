import styled from "styled-components";

export const SignupImg = styled.img`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingupContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleRegister = styled.h2`
  text-align: center;
  padding-top: 20px;
  color: rgb(230, 230, 230);
`;

export const SubTitleSignup = styled.p`
  text-align: center;
  padding-top: 10px;
  color: rgb(230, 230, 230);
`;

export const SigninTitleSignup = styled.p`
  text-align: center;
  padding-top: 10px;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (max-width: 720px) {
    width: 80%;
  }
`;

export const SingupInput = styled.input`
  display: flex;
  width: 80%;
  height: 40px;
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
  height: 40px;
  cursor: pointer;
  transition: all 0.8s ease-out;
`;
