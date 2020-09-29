import Link from "next/link";
import { FaShoppingCart, FaUser, FaBurn } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import { NavBar, Logo, DropDown } from "./styles";

const Nav = () => {
  const menu = useMenuState();

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
        <DropDown visible={menu.visible}>
          <MenuButton {...menu}>
            Shop
            <BiDownArrow />
          </MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Adventuring</MenuItem>
            <MenuItem {...menu}>Armor</MenuItem>
            <MenuItem {...menu}>Misc</MenuItem>
            <MenuItem {...menu}>Weapons</MenuItem>
            <MenuItem {...menu}>Vehicles</MenuItem>
          </Menu>
        </DropDown>
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
