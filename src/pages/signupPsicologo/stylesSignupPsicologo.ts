import styled from "styled-components";

export const SingupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 50px 0px 90px 0px;
`;

export const TitleRegister = styled.h1`
  text-align: center;
  padding-top: 30px;
  color: rgb(150, 150, 150);
`;

export const SingupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SingupInput = styled.input`
  display: flex;
  width: 50%;
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
  border: 1px solid rgb(150, 150, 150);
  color: rgb(150, 150, 150);
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 5px;
  width: 30%;
  height: 40px;
  cursor: pointer;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgb(150, 150, 150);
    color: white;
  }
`;
