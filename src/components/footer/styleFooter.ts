import styled from "styled-components";

export const CardFooter = styled.div`
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
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    font-size: min(1rem, 3.2vw);
    color: #fff;
    margin-right: 2rem;
  }

  img {
    width: 2rem;
    margin: 0.2rem;
  }
`;
