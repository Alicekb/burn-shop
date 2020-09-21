import styled from "@emotion/styled";
import { Tab, TabList } from "reakit/Tab";

const TabMenu = styled(TabList)`
  @media (max-width: 700px) {
    button {
      margin-bottom: 3px;
      width: 100%;
    }
  }
  @media (min-width: 700px) {
    margin-left: 20px;
    button:not(:first-of-type) {
      margin-left: 10px;
    }
  }
  @media (min-width: 1000px) {
    margin-left: 0;
  }
`;

const TabButton = styled(Tab)`
  padding: 10px 20px;
  border: 0;
  font-weight: 700;

  &:hover {
    ${({ theme: { colors } }) => ({
      backgroundColor: colors.burnt,
      color: colors.purple,
    })}
  }

  ${({ id, theme: { colors }, selectedId }) => ({
    backgroundColor: id === selectedId ? colors.burnt : colors.lightGrey,
    color: id === selectedId ? colors.purple : colors.darkGrey,
  })}
`;

const ItemGrid = styled.ul`
  display: grid;
  justify-items: center;
  margin: 15px 0;
  padding: 0;
  list-style: none;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 15rem);
    justify-items: start;
    margin-left: 20px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 14.5rem);
    justify-items: start;
    margin-left: 0;
  }
`;

export { TabMenu, TabButton, ItemGrid };
