import styled from "@emotion/styled";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavBar = styled.nav`
  ul {
    display: grid;
    grid-template: 1fr / 1fr repeat(3, auto);
    list-style: none;
    padding: 0 2em;

    li:not(:first-child) {
      margin-left: 15px;
      text-align: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li>Burn Shop</li>
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
