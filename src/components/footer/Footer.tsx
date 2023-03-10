import linkedin from "../../assets/img/linkedin.png";
import git from "../../assets/img/git.png";
import { CardFooter } from "../footer/styleFooter";

export function Footer() {
  return (
    <CardFooter>
      <p>Developed by Team 2 &copy;</p>
      <a
        href="https://www.linkedin.com/in/greg%C3%B3rio-neto-a0119b239/"
        target="_blank"
      >
        <img src={linkedin} />
      </a>
      <a href="https://github.com/GregorioGrGeOtOl" target="_blank">
        <img src={git} />
      </a>
    </CardFooter>
  );
}
