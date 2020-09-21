/** @jsx jsx */
import { FooterArea } from "./styles";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

//! Li needs to be a tag links after their pages are build.
const Footer = () => {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundColor: theme.colors.lightGrey,
        color: theme.colors.purple,
      }}
    >
      <FooterArea>
        <div>
          <h4>NEWS & UPDATES</h4>
          <p>Sign up to get the latest on sales, new releases and more...</p>
        </div>
        <div>
          <h4>STUFF TO KNOW</h4>
          <ul>
            <li>Help Center / FAQS</li>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>Legal Stuff</li>
            <li>Find a Store</li>
            <li>Contact Us</li>
            <li>Search</li>
          </ul>
        </div>
        <div>
          <h4>ABOUT</h4>
          <ul>
            <li>About Us</li>
            <li>What is Burn Bryte</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div>
          <h4>ADDITIONAL INFO</h4>
          <ul>
            <li>Wholesale Inquiries</li>
            <li>Careers</li>
          </ul>
        </div>
      </FooterArea>
    </div>
  );
};

export default Footer;
