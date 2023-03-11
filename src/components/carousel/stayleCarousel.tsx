import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const StyledCarousel = styled(Carousel)`
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    padding: 20px;
    position: absolute;
    right: 0;

    h3 {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }

  img {
    height: 400px;
    object-fit: cover;
    width: 100%;
  }
`;

export default StyledCarousel;
