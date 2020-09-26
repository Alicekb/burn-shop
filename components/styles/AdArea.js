import styled from "@emotion/styled";

const AdList = styled.ul`
  list-style: none;
  padding: 0;

  li:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`;

const AdItem = styled.li`
  position: relative;
  overflow: hidden;

  a {
    color: ${({ theme: { colors } }) => colors.purple};
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  div {
    position: absolute;
    top: ${(props) => (props.first ? "70%" : "60%")};
    left: 0;
    height: 40%;
    font-size: 12px;
    background-color: rgb(240, 240, 240);
    opacity: 85%;

    h2 {
      font-size: 1.3em;
      margin-top: 0.5rem;
    }

    h2,
    p {
      margin-left: 0.5rem;
      margin-bottom: 0;
    }

    &:hover,
    &:focus {
      ${({ theme: { colors } }) => ({
        backgroundColor: colors.burnt,
        color: colors.purple
      })}
      opacity: 95%;
    }
  }
`;

export { AdList, AdItem };
