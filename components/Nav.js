import styled from "@emotion/styled";
import { FaShoppingCart, FaUser, FaBurn } from "react-icons/fa";

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
      margin-left: 15px;
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
