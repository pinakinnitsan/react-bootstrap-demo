import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = ({ slides }) => {
  const renderSlides = () => {
    return slides.map(slide => {
      return (
        <Carousel.Item key={slide.id} style={{
          backgroundImage: `url(${slide.imageUrl})`
        }}>
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })
  }

  return (
    <Carousel>
      {
        renderSlides()
      }
    </Carousel>
  );
}

export default CustomCarousel;