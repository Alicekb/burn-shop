import styled from "@emotion/styled";

const NavBar = styled.nav`
  width: 90%;
  margin: 0 auto;
  margin-top: 5px;
  ul {
    display: grid;
    grid-template: 1fr / 1fr repeat(3, auto);
    align-items: center;
    list-style: none;
    padding: 0;

    li:not(:first-of-type) {
      margin-left: 25px;
      text-align: center;
    }
  }
  @media (min-width: 1000px) {
    width: 1180px;
  }
`;

const Logo = styled.li`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;

  a {
    color: ${(props) => props.theme.colors.burnt};
  }
`;

const DropDown = styled.li`
  width: 100%;
  font-size: 1rem;

  & > button {
    padding-top: 3px;
    padding-bottom: 0;

    svg {
      padding-left: 5px;
    }
  }

  button:hover {
    color: ${({ theme: { colors } }) => colors.burnt};
  }

  & > div {
    display: grid;
    border: 1px solid black;
    background-color: white;
    left: -14px !important;
    z-index: 9999;

    button {
      padding: 1rem;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }

  ${({ visible, theme: { colors } }) => {
    if (visible) {
      return {
        border: `1px solid black`,
        "button:hover": {
          color: `${colors.burnt}`,
        },
      };
    }
  }}
`;

export { NavBar, Logo, DropDown };
