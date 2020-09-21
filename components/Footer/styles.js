import styled from "@emotion/styled";

export const FooterArea = styled.footer`
  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;

  div {
    h4 {
      border-top: 2px solid;
      border-bottom: 2px solid;
      border-color: ${({ theme: { colors } }) => colors.purple};
      margin-right: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
      font-weight: 600;

      li:hover {
        color: ${({ theme: { colors } }) => colors.burnt};
        pointer: cusor;
      }
    }
  }
`;
