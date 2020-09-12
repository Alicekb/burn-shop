import styled from "@emotion/styled";
import { Box } from "reakit/Box";

export const ItemBox = styled(Box)`
  width: 20rem;
  height: 100%;
  h2 {
    margin-top: 10px;
    line-height: 1;
  }
  img {
    width: 100%;
  }
  img:hover {
    border: 2px solid ${({ theme: { colors } }) => colors.burnt};
  }
  @media (min-width: 700px) {
    width: 14rem;
  }
`;
