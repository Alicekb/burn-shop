import styled from "@emotion/styled";
import { Box } from "reakit/Box";

export const ItemBox = styled(Box)`
  width: 20rem;
  height: 100%;
  text-align: center;

  &:hover {
    a {
      color: ${({ theme: { colors } }) => colors.burnt};
    }
    img {
      outline: 3px solid ${({ theme: { colors } }) => colors.burnt};
    }
  }

  a {
    color: black;
    text-decoration: none;
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
    font-weight: 700;
    padding: 5px;
  }
`;

export const NewTag = styled.p`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.burnt,
    color: colors.purple,
  })}
`;

export const SalesTag = styled.p`
  background-color: red;
  border-radius: 50%;
  color: white;
  transform: rotate(-13deg);
`;
