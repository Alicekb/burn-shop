import { Image } from "cloudinary-react";
import styled from "@emotion/styled";

export const SliderDiv = styled.div`
  height: 40vh;

  @media (min-width: 700px) {
    height: 60vh;
  }

  @media (min-height: 1000px) {
    height: 30vh;
  }

  div {
    height: 100%;
  }
`;

export const SliderImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const SliderButton = styled.button`
  position: relative;
  left: 25%;

  @media (min-width: 700px) {
    left: 30%;
  }

  @media (min-width: 800px) {
    left: 35%;
  }
  margin-left: 10px;
  height: 10px;
  width: 50px;
  border: 0;
  border-radius: 25px;
  @media (min-width: 1000px) {
    width: 100px;
  }

  ${({ active, theme: { colors } }) => {
    return {
      opacity: active ? "100%" : "50%",
      backgroundColor: colors.darkGrey,
    };
  }}
`;
