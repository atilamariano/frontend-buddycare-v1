import styled from "styled-components";

export const SigninImg = styled.img`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SigninHome = styled.img`
  width: 7%;
  position: absolute;
  top: 20px;
  left: 35px;
  cursor: pointer;
`;

export const SigninSelect = styled.select`
  display: flex;
  width: 83%;
  height: 37px;
  border: none;
  outline: none;
  margin: 5px;
  padding-left: 10px;
  color: rgb(150, 150, 150);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const SigninOption = styled.option`
  font-size: 16px;
`;

export const SigninContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleSignin = styled.h2`
  margin: 0;
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const SubTitleSignin = styled.p`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const AccountTitleSignin = styled.p`
  margin: 0;
  text-align: center;
  color: rgb(230, 230, 230);
  cursor: pointer;
`;

export const SigninForm = styled.form`
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
  padding: 15px 0 15px 0;

  @media (max-width: 960px) {
    width: 50%;
  }

  @media (max-width: 570px) {
    width: 80%;
  }
`;

export const SigninInput = styled.input`
  display: flex;
  width: 80%;
  height: 35px;
  border: none;
  outline: none;
  margin: 5px;
  padding-left: 10px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 0 0px 1000px white inset;
`;

export const SigninButton = styled.button`
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
