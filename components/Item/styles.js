import styled from "@emotion/styled";
import { Box } from "reakit/Box";

export const ItemBox = styled(Box)`
  width: 20rem;
  height: 100%;
  text-align: center;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${({ theme: { colors } }) => colors.burnt};
    }
  }

  h2 {
    margin-top: 10px;
    line-height: 1;
    font-size: 1.5em;
  }

  @media (min-width: 700px) {
    width: 14rem;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  text-align: center;
  color: black;

  p {
    position: absolute;
    top: 8px;
    color: white;
    font-weight: 700;
    background-color: ${({ theme: { colors } }) => colors.burnt};
    padding: 5px;
  }
`;