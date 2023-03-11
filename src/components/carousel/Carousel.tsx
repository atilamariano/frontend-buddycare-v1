import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { StyledCarouselItem } from "./StayleCarousel";

type Slide = {
  title: string;
  caption: string;
  image: string;
};

type Props = {
  slides: Slide[];
};

const MyCarousel: React.FC<Props> = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      {slides.map((slide, idx) => (
        <StyledCarouselItem key={idx}>
          <img src={slide.image} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </StyledCarouselItem>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
