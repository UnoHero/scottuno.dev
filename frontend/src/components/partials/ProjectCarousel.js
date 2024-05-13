import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  color: white;
  ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  border-radius: 20px; /* Rounded box */
  padding: 5px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? 'lightgray' : 'gray'};
  margin: 0 5px;
  cursor: pointer;
`;

const ProjectCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const images = [
    'https://placehold.co/1100x700',
    'https://placehold.co/1100x700',
    'https://placehold.co/1100x700',
  ];

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % images.length
        );
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [autoplay, images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Container>
      <Carousel>
        <Arrow direction="left" onClick={handlePrev}>{'<'}</Arrow>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              display: index === currentImageIndex ? 'block' : 'none',
              width: '100%',
              height: 'auto',
            }}
          />
        ))}
        <Arrow direction="right" onClick={handleNext}>{'>'}</Arrow>
      </Carousel>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentImageIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default ProjectCarousel;
