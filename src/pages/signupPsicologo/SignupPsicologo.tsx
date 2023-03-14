import { useState } from "react";
import { IRegisterPsicologos } from "../../interfaces/IRegisterPsicologos";
import { RegisterService } from "../../service/authentcation/signupAuth";
import swal from "sweetalert";
import {
  SigninTitleSignup,
  SignupImg,
  SingupButton,
  SingupContainer,
  SingupForm,
  SingupInput,
  SubTitleSignup,
  TitleRegister,
} from "./stylesSignupPsicologo";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import imgLogo from "../../assets/img/icon.png";
import { useNavigate } from "react-router-dom";

export const PsicologosRegister = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<IRegisterPsicologos>({
    name: "",
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: IRegisterPsicologos) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: "Error!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 6000,
      });
    }

    localStorage.setItem("jwt", jwt);
    swal({
      title: "Psicólogo cadastrado com sucesso!",
      icon: "success",
      timer: 6000,
    });
  };

  return (
    <>
      {/* <Header /> */}
      <SingupContainer>
        <SingupForm onSubmit={handleRegisterUser}>
          <SignupImg src={imgLogo} />
          <TitleRegister>Bem-vindo ao Buddy Care</TitleRegister>
          <SubTitleSignup>
            Experimente gratuitamente nossa plataforma.
          </SubTitleSignup>
          <SingupInput
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
            onChange={handleChangesValues}
          />

          <SingupInput
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu melhor e-mail"
            required
            onChange={handleChangesValues}
          />

          <SingupInput
            type="password"
            name="password"
            id="password"
            placeholder="Digite uma senha"
            required
            onChange={handleChangesValues}
          />

          <SingupButton type="submit">Salvar</SingupButton>
          <SubTitleSignup>Já possui uma conta?</SubTitleSignup>
          <SigninTitleSignup onClick={() => navigate("/signin")}>
            Acesse sua conta!
          </SigninTitleSignup>
        </SingupForm>
      </SingupContainer>
      {/* <Footer /> */}
    </>
  );
};
