import { useState, useEffect } from "react";
import CustomImage from "./CustomImage";
import { SliderDiv, SliderButton } from "./styles";

const Slider = ({ sliderImages }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % sliderImages.length;
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
        imgUrl={sliderImages[current].imgUrl}
        imgAlt={sliderImages[current].alt}
        key={current}
      />
      {sliderImages.map((image, index) => (
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
