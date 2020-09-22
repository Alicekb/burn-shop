import { useState, useEffect } from "react";
import CustomImage from "./CustomImage";
import { SliderDiv, SliderButton } from "./styles";

const SLIDER_IMAGES = [
  {
    imgUrl: "coffee-station.jpg",
    alt: "Coffee station cups of various colors",
  },
  {
    imgUrl: "salvaing.jpg",
    alt: "Savaging Services by Wessh Overguild over a broken plane",
  },
  {
    imgUrl: "camera.jpg",
    alt: "Advanced Camera red series next to red drone",
  },
  {
    imgUrl: "cosmos.jpg",
    alt: "Cosmos Interceptor Spaceship by Kosma Overguild and A.C.E Foundation",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % SLIDER_IMAGES.length;
    const id = setTimeout(() => setCurrent(next), 8000);
    return () => {
      clearTimeout(id);
    };
  }, [current]);

  const handleImageChange = (currentImage) => {
    setCurrent(currentImage);
  };

  return (
    <SliderDiv>
      <CustomImage
        imgUrl={SLIDER_IMAGES[current].imgUrl}
        imgAlt={SLIDER_IMAGES[current].alt}
        key={current}
      />
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
