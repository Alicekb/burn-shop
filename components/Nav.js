import styled from "@emotion/styled";
import { FaShoppingCart, FaUser, FaBurn } from "react-icons/fa";

const NavBar = styled.nav`
  ul {
    display: grid;
    grid-template: 1fr / 1fr repeat(3, auto);
    align-items: center;
    list-style: none;
    padding: 0 2em;

    li:not(:first-child) {
      margin-left: 15px;
      text-align: center;
    }
  }
`;

const Logo = styled.li`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.burnt};
`;

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <Logo>
          <FaBurn />
          burnbot
        </Logo>
        <li>Shop</li>
        <li>
          <FaUser />
        </li>
        <li>
          <FaShoppingCart />
        </li>
      </ul>
    </NavBar>
  );
};

export default Nav;
