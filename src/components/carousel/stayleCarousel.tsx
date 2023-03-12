import styled from "styled-components";

export const StyledCarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f5f5f5;

  img {
    height: 400px;
    object-fit: cover;
  }

  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;

    h3 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
