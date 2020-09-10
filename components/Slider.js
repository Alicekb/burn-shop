import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import styled from "@emotion/styled";

const SliderDiv = styled.div`
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

  opacity: ${(props) => (props.active ? "100%" : "50%")};
  margin-left: 10px;
  height: 10px;
  width: 50px;
  border: 0;
  border-radius: 25px;
  @media (min-width: 1000px) {
    width: 100px;
  }
`;

const SLIDER_IMAGES = [
  {
    url: "coffee-station.jpg",
    alt: "Coffee station cups of various colors",
  },
  {
    url: "salvaing.jpg",
    alt: "Savaging Services by Wessh Overguild over a broken plane",
  },
  {
    url: "camera.jpg",
    alt: "Advanced Camera red series next to red drone",
  },
  {
    url: "cosmos.jpg",
    alt: "Cosmos Interceptor Spaceship by Kosma Overguild and A.C.E Foundation",
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
          publicId={`burn-shop/banners/${SLIDER_IMAGES[current].url}`}
          alt={SLIDER_IMAGES[current].alt}
        />
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
