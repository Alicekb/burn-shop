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
          <Link href="/" passHref>
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
            <Link href="/categories/adventuring" passHref>
              <MenuItem {...menu} as="a">
                Adventuring
              </MenuItem>
            </Link>
            <Link href="/categories/armor" passHref>
              <MenuItem {...menu} as="a">
                Armor
              </MenuItem>
            </Link>
            <Link href="/categories/misc" passHref>
              <MenuItem {...menu} as="a">
                Misc
              </MenuItem>
            </Link>
            <Link href="/categories/weapons" passHref>
              <MenuItem {...menu} as="a">
                Weapons
              </MenuItem>
            </Link>
            <Link href="/categories/vehicles" passHref>
              <MenuItem {...menu} as="a">
                Vehicles
              </MenuItem>
            </Link>
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
