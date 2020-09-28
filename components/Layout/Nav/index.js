import { FaShoppingCart, FaUser, FaBurn } from "react-icons/fa";
import Link from "next/link";
import { NavBar, Logo } from "./styles";

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <Logo>
          <Link href="/">
            <a>
              <FaBurn />
              burnbot
            </a>
          </Link>
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
