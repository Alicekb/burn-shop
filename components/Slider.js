import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import styled from "@emotion/styled";

const SliderDiv = styled.div`
  width: 100vw;
  height: 40vh;

  @media (min-width: 700px) {
    height: 60vh;
  }

  @media (min-height: 1000px) {
    height: 30vh;
  }
`;

const SliderImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const SliderButton = styled.button`
  position: relative;
  top: -10%;
  left: 25%;

  @media (min-width: 700px) {
    left: 30%;
  }

  @media (min-width: 800px) {
    left: 35%;
  }

  @media (min-width: 1200px) {
    left: 40%;
  }

  opacity: ${(props) => (props.active ? "100%" : "50%")};
  margin-left: 10px;
  height: 10px;
  width: 100px;
  border: 0;
  border-radius: 25px;
`;

const SLIDER_IMAGES = [
  {
    url: "burn-shop/banners/coffee-station.jpg",
    alt: "Coffee station cups of various colors",
  },
  {
    url: "burn-shop/banners/salvaing.jpg",
    alt: "Savaging Services by Wessh Overguild over a broken plane",
  },
  {
    url: "burn-shop/banners/camera.jpg",
    alt: "Advanced Camera red series next to red drone",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % SLIDER_IMAGES.length;
    const id = setTimeout(() => setCurrent(next), 4000);
    return () => {
      clearTimeout(id);
    };
  }, [current]);

  const handleImageChange = (currentImage) => {
    setCurrent(currentImage);
  };

  return (
    <SliderDiv>
      <a href="#">
        <SliderImage
          cloudName="aliceb"
          publicId={SLIDER_IMAGES[current].url}
          alt={SLIDER_IMAGES[current].alt}
        ></SliderImage>
      </a>
      {SLIDER_IMAGES.map((image, index) => (
        <SliderButton
          key={index}
          active={current === index ? true : false}
          onClick={() => handleImageChange(index)}
          aria-label={`slider image ${index}`}
        ></SliderButton>
      ))}
    </SliderDiv>
  );
};

export default Slider;
