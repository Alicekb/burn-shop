import { FaShoppingCart, FaUser, FaBurn } from "react-icons/fa";
import { NavBar, Logo } from "./styles";

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
