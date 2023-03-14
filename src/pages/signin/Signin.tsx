import { useState } from "react";
import swal from "sweetalert";
import {
  SigninImg,
  SigninButton,
  SigninContainer,
  SigninForm,
  SigninInput,
  TitleSignin,
  SubTitleSignin,
  AccountTitleSignin,
} from "./styleSignin";
import imgLogo from "../../assets/img/icon.png";
import { useNavigate } from "react-router-dom";
import { ISignin } from "../../interfaces/ISignin";
import { signinService } from "../../service/authentcation/signinAuth";
import NavBar from "../../components/navbar/Navbar";

export const Signin = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    credential: "",
    password: "",
    type: "psicologo",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: ISignin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await signinService.Login(values);

    if (!response) {
      swal({
        title: "Erro de login",
        text: "Usuário e/ou senha inválidos",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;
    const type = response.data.type;
    console.log(jwt);

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("type", type);
      swal({
        title: "Bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigate("/principal");
    }
  };

  return (
    <>
    <NavBar isUserLoggedIn={isUserLoggedIn} />
    <SigninContainer>
      <SigninForm onSubmit={handleSignin}>
        <SigninImg src={imgLogo} />
        <TitleSignin>Acesse o Baddy Care</TitleSignin>
        <SubTitleSignin>Informe seus dados e acesse sua conta:</SubTitleSignin>

        <SigninInput
          type="email"
          name="credential"
          id="email"
          placeholder="Digite seu e-mail"
          required
          onChange={handleChangesValues}
        />

        <SigninInput
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          required
          onChange={handleChangesValues}
        />

        <SigninButton type="submit">Entrar</SigninButton>
        <SubTitleSignin>Não possui uma conta?</SubTitleSignin>
        <AccountTitleSignin onClick={() => navigate("/signup")}>
          Clique aqui!
        </AccountTitleSignin>
      </SigninForm>
    </SigninContainer>
    </>
  );
};
