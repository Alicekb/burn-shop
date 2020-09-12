import { useState, useEffect } from "react";
import { SliderDiv, SliderImage, SliderButton } from "./styles";

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
